

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


export const ClientsContent = () => {
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
          datasets: [{
            data: [120,97,175,95,110,97,105,105,100,125,120,250,150,151,90,110,105,250],
            backgroundColor: 'orange',
            fill: true
          }]
        },
        options: {
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Clients Statistics :'
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
            'Active Clients    30%',
            'Inactive Clients    30%',
            'Blocked Clients    30%'
          ],
          datasets: [{
            backgroundColor: ['#FFC107', '#7952B3', '#484C53'],
            data: [30, 30, 30]
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Clients Statistics'
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
    <section className="multi-collapse" id="clients">
      <div className="multiShows">
        <div className="row">
          <div className="col-lg-12 head">
            <h3>
              Clients Live Data<span>:</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card templat">
              <div className="request">
                <span className="ordIcon iconOrder1"><i className="bi bi-check-circle-fill"></i></span>
                <h4>Active clients</h4>
                <p><span className="count">130 </span>Live</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card templat">
              <div className="request">
                <span className="ordIcon iconOrder2"><i className="bi bi-x-circle-fill"></i></span>
                <h4>Inactive clients</h4>
                <p><span className="count">20 </span>Live</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card templat">
              <div className="request">
                <span className="ordIcon iconOrder3"><i className="bi bi-clock-fill"></i></span>
                <h4>Blocked clients</h4>
                <p><span className="count">252 </span>Live</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="content-wrapper">
            <canvas ref={lineCanvasRef} id="myChart7" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="content-wrapper">
            <canvas ref={pieCanvasRef} id="myChart8" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          </div>
        </div>
      </div>
      {/* ...rest of your table code... */}
    </section>
  );
}
