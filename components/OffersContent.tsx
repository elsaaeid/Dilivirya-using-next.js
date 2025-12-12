
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const OffersContent = () => {
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
                    },
                    {
                      data: [90,20,25,15,30,33,90,90,20,25,15,17,15,30,15,30,30,20],
                      borderColor: '#7952B3',
                      fill: false
                    }
                  ]
                },
                options: {
                  plugins: {
                    legend: { display: true },
                    title: {
                      display: true,
                      text: 'Offers Statistics :'
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
                    'Active offers   30%',
                    'Expired offers    30%',
                    'Inactive offers    30%'
                  ],
                  datasets: [{
                    backgroundColor: ['#FFC107', '#0ae50a', '#2fb2ec'],
                    data: [30, 30, 30]
                  }]
                },
                options: {
                  plugins: {
                    title: {
                      display: true,
                      text: 'Offers Statistics'
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
            <section className="multi-collapse" id="offers">
              <div className="multiShows">
                <div className="row">
                  <div className="col-lg-12 head">
                    <h3>
                      Offers Live Data<span>:</span>
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card templat">
                      <div className="request">
                        <span className="ordIcon iconOrder1"><i className="bi bi-check-circle-fill"></i></span>
                        <h4>Active orders</h4>
                        <p><span className="count">130 </span>Live</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card templat">
                      <div className="request">
                        <span className="ordIcon iconOrder2"><i className="bi bi-x-circle-fill"></i></span>
                        <h4>Expired offers</h4>
                        <p><span className="count">20 </span>Live</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card templat">
                      <div className="request">
                        <span className="ordIcon iconOrder3"><i className="bi bi-clock-fill"></i></span>
                        <h4>Inactive offers</h4>
                        <p><span className="count">252 </span>Live</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="content-wrapper">
                    <canvas ref={lineCanvasRef} id="myChart3" style={{ width: '100%', maxWidth: '600px' }}></canvas>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="content-wrapper">
                    <canvas ref={pieCanvasRef} id="myChart4" style={{ width: '100%', maxWidth: '600px' }}></canvas>
                  </div>
                </div>
              </div>
            </section>
          );
        };
