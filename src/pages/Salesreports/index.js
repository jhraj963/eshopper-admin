import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { jsPDF } from "jspdf";
import moment from 'moment';

function Salesreports() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    fetchSalesData();
  }, []);

  // Fetch all orders data
  const fetchSalesData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/allorder/`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  // Filter data based on selected date range
  const filterDataByDateRange = () => {
    if (startDate && endDate) {
      const filtered = data.filter((order) => {
        const orderDate = moment(order.order_date); // Ensure valid date format
        return orderDate.isBetween(startDate, endDate, null, '[]'); // '[]' for inclusive range
      });
      setFilteredData(filtered);
    }
  };

  // Generate PDF Report with styling
  const generatePDF = () => {
    const doc = new jsPDF('landscape'); // Set PDF orientation to landscape
    doc.setFont('helvetica', 'normal');

    // Add Title (Centered)
    const title = "Sales Report";
    const pageWidth = doc.internal.pageSize.width;
    const titleWidth = doc.getTextWidth(title); // Get the width of the title text
    const titleX = (pageWidth - titleWidth) / 2; // Calculate center X position
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40); // Dark text color
    doc.text(title, titleX, 20); // Centered title in landscape

    // Date Range (Centered and Bold)
    const dateRangeText = `Date Range: ${moment(startDate).format('YYYY-MM-DD')} to ${moment(endDate).format('YYYY-MM-DD')}`;
    const dateRangeWidth = doc.getTextWidth(dateRangeText); // Get the width of the date range text
    const dateRangeX = (pageWidth - dateRangeWidth) / 2; // Calculate center X position
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold'); // Set font to bold for date range
    doc.setTextColor(100, 100, 100); // Lighter text color for date range
    doc.text(dateRangeText, dateRangeX, 30); // Centered date range

    // Table Headers Styling
    const tableHeaders = [
      { title: "Order ID", width: 25 },
      { title: "Customer Name", width: 40 },
      { title: "Email", width: 40 },
      { title: "Mobile No", width: 30 },
      { title: "Address", width: 60 },
      { title: "Order Date", width: 30 },
      { title: "Total Amount", width: 30 },
    ];

    const headerY = 40; // Starting Y for table headers
    const rowHeight = 10; // Row height for each row in the table

    // Draw table headers
    let currentX = 20;
    tableHeaders.forEach(header => {
      doc.setFontSize(12);
      doc.setFillColor(240, 240, 240); // Light grey fill for header cells
      doc.rect(currentX, headerY, header.width, rowHeight, 'FD'); // 'FD' stands for Fill and Draw
      doc.text(header.title, currentX + header.width / 2, headerY + rowHeight / 2, { align: 'center', baseline: 'middle' });
      currentX += header.width;
    });

    // Draw data rows
    let yOffset = headerY + rowHeight;
    const maxRowsPerPage = Math.floor((doc.internal.pageSize.height - 40) / rowHeight); // Calculate how many rows fit per page
    let rowCount = 0;

    filteredData.forEach((order, index) => {
      // Ensure we don't overflow the page
      if (rowCount >= maxRowsPerPage) {
        doc.addPage();
        rowCount = 0; // Reset row count
        yOffset = 20; // Reset y position for new page
        // Draw table headers again
        currentX = 20;
        tableHeaders.forEach(header => {
          doc.setFillColor(240, 240, 240);
          doc.rect(currentX, yOffset, header.width, rowHeight, 'FD');
          doc.text(header.title, currentX + header.width / 2, yOffset + rowHeight / 2, { align: 'center', baseline: 'middle' });
          currentX += header.width;
        });
        yOffset += rowHeight; // Move down to next row
      }

      // Write data for each row
      const dataRow = [
        order.id.toString(),
        order.customer_name,
        order.email,
        order.mobile_no,
        order.address,
        order.order_date,
        order.total_amount.toString(),
      ];

      currentX = 20;
      dataRow.forEach((text, index) => {
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0); // Black text color for data
        doc.text(text, currentX + tableHeaders[index].width / 2, yOffset + rowHeight / 2, { align: 'center', baseline: 'middle' });
        currentX += tableHeaders[index].width;
      });

      yOffset += rowHeight; // Move to the next row
      rowCount += 1; // Increment row count
    });

    // Download the PDF
    doc.save("sales_report.pdf");
  };

  return (
    <AdminLayout>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h2>Sales Report</h2>

            {/* Date Picker for selecting date range */}
            <div className="date-range-picker">
              <label>Start Date: </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy-MM-dd"
                className="form-control"
              />
              <label>End Date: </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy-MM-dd"
                minDate={startDate}
                className="form-control"
              />
              <button className="btn btn-primary ml-3" onClick={filterDataByDateRange}>
                Filter Report
              </button>
            </div>

            {/* Only show the filtered sales data after the filter button is clicked */}
            {filteredData.length > 0 && (
              <>
                <div className="sales-table mt-4">
                  <table className="table table-bordered mb-0 text-center table-info">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Address</th>
                        <th>Order Date</th>
                        <th>Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((order) => (
                        <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.customer_name}</td>
                          <td>{order.email}</td>
                          <td>{order.mobile_no}</td>
                          <td>{order.address}</td>
                          <td>{order.order_date}</td>
                          <td>{order.total_amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Button to generate and download PDF */}
                <div className="mt-4">
                  <button className="btn btn-success" onClick={generatePDF}>
                    Download PDF Report
                  </button>
                </div>
              </>
            )}

            {/* If no data found, show a message */}
            {filteredData.length === 0 && startDate && endDate && (
              <p>No orders found for the selected date range.</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Salesreports;
