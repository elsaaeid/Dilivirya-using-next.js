import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


export const ProductsContent = () => {
  const lineChartRef = useRef<Chart|null>(null);
  const pieChartRef = useRef<Chart|null>(null);
  const lineCanvasRef = useRef<HTMLCanvasElement|null>(null);
  const pieCanvasRef = useRef<HTMLCanvasElement|null>(null);

  useEffect(() => {
    // Line Chart
    if (lineCanvasRef.current) {
      lineChartRef.current = new Chart(lineCanvasRef.current, {
        type: 'line',
        data: {
          labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
          datasets: [
            {
              data: [120,97,175,95,110,97,105,105,100,125,120,250,150,151,90,110,105,250],
              backgroundColor: 'orange',
              fill: true
            }
          ]
        },
        options: {
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Products Statistics :'
            }
          }
        }
      });
    }
    // Pie Chart
    if (pieCanvasRef.current) {
      pieChartRef.current = new Chart(pieCanvasRef.current, {
        type: 'pie',
        data: {
          labels: [
            'Active Products    30%',
            'Inactive Products   30%',
            'Available Products    30%',
            'Unavailable Products    30%'
          ],
          datasets: [{
            backgroundColor: [
              '#c4960e',
              '#80620a',
              '#FFC107',
              '#c4960e'
            ],
            data: [30, 30, 30, 30]
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Products Statistics'
            }
          }
        }
      });
    }
    // Cleanup
    return () => {
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
        lineChartRef.current = null;
      }
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
        pieChartRef.current = null;
      }
    };
  }, []);

  return (
    <section className="multi-collapse" id="products">
      <div className="multiShows">
        <div className="row">
          <div className="col-lg-12 head">
            <h3>
              Products Live Data<span>:</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card templat">
              <div className="request">
                <span className="ordIcon iconOrder1"><i className="bi bi-check-circle-fill"></i></span>
                <h4>Active Products</h4>
                <p><span className="count">130 </span>products</p>
              </div>
              <div className="request">
                <span className="ordIcon iconOrder1"><i className="bi bi-check-circle-fill"></i></span>
                <h4>Available Products</h4>
                <p><span className="count">130 </span>products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="card templat">
              <div className="request">
                <span className="ordIcon iconOrder2"><i className="bi bi-x-circle-fill"></i></span>
                <h4>Inactive Products</h4>
                <p><span className="count">20 </span>products</p>
              </div>
              <div className="request">
                <span className="ordIcon iconOrder2"><i className="bi bi-x-circle-fill"></i></span>
                <h4>Unavailable Products</h4>
                <p><span className="count">20 </span>products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="content-wrapper">
            <canvas ref={lineCanvasRef} id="myChart9" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="content-wrapper">
            <canvas ref={pieCanvasRef} id="myChart10" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};
