import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const ViewsContent = () => {
  const lineChartRef = useRef<Chart|null>(null);
  const pieChartAgeRef = useRef<Chart|null>(null);
  const pieChartGenderRef = useRef<Chart|null>(null);
  const lineCanvasRef = useRef<HTMLCanvasElement|null>(null);
  const pieAgeCanvasRef = useRef<HTMLCanvasElement|null>(null);
  const pieGenderCanvasRef = useRef<HTMLCanvasElement|null>(null);

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
            legend: { display: false },
            title: {
              display: true,
              text: 'Story Views Statistics :'
            }
          }
        }
      });
    }
    // Pie Chart (Age)
    if (pieAgeCanvasRef.current) {
      pieChartAgeRef.current = new Chart(pieAgeCanvasRef.current, {
        type: 'pie',
        data: {
          labels: [
            'Age from 13 to 17   30%',
            'Age from 18 to 24   30%',
            'Age from 25 to 34   30%',
            'Age from 35 to 44   30%',
            'Age from 45 to 54   30%',
            'Age from 55 to 64   30%',
            'Age Above 65   30%'
          ],
          datasets: [{
            backgroundColor: [
              '#FFC107',
              '#0ae50a',
              '#1b83eb',
              '#FFC107',
              '#0ae50a',
              '#1b83eb',
              '#1b83eb'
            ],
            data: [30, 30, 30, 30, 30, 30, 30]
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Story views details (Age) :'
            }
          }
        }
      });
    }
    // Pie Chart (Gender)
    if (pieGenderCanvasRef.current) {
      pieChartGenderRef.current = new Chart(pieGenderCanvasRef.current, {
        type: 'pie',
        data: {
          labels: [
            'Male',
            'Female',
            'Others'
          ],
          datasets: [{
            backgroundColor: [
              '#1b83eb',
              '#e600e6',
              '#0ae50a'
            ],
            data: [60, 30, 30]
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Story views details (Gender) :'
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
      if (pieChartAgeRef.current) {
        pieChartAgeRef.current.destroy();
        pieChartAgeRef.current = null;
      }
      if (pieChartGenderRef.current) {
        pieChartGenderRef.current.destroy();
        pieChartGenderRef.current = null;
      }
    };
  }, []);
  return (
    <section className="multi-collapse" id="views">
      <div className="multiShows">
        <div className="row">
          <div className="col-12">
            <div className="content-wrapper">
              <canvas ref={lineCanvasRef} id="myChartViews"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="content-wrapper">
            <canvas ref={pieAgeCanvasRef} id="myChart5"></canvas>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-wrapper">
            <canvas ref={pieGenderCanvasRef} id="myChart6"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
