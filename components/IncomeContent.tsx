'use client';


import React, { useRef, useState } from 'react';

import { FaCalendarMinus } from "react-icons/fa6";


export const IncomeContent = () => {
  // Date range state
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // Which date is active: 'from' or 'to'
  const [activeDate, setActiveDate] = useState<'from' | 'to'>("from");
  // Calendar visibility state
  const calendarContainerRef = useRef<HTMLDivElement>(null);
  const fromButtonRef = useRef<HTMLHeadingElement>(null);
  const toButtonRef = useRef<HTMLHeadingElement>(null);

  // State for calendar-status select
  const [period, setPeriod] = useState('0');
  const periodLabels: { [key: string]: string } = {
    '0': 'This week',
    '1': 'Today',
    '2': 'This week',
    '3': 'This month',
    '4': 'This year',
  };

  // Show/hide calendar
  const calendarFunction = () => {
    if (calendarContainerRef.current) {
      const el = calendarContainerRef.current;
      el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }
  };

  // Handlers to switch active date
  const choice1 = () => setActiveDate('from');
  const choice2 = () => setActiveDate('to');
  return (
    <section className="content-income w-100 my-3">
      <div className="header-wrapper mb-2 flex flex-row justify-between items-center">
        <div className="head">
          <h3>Total income:</h3>
        </div>
        <div className="calender-code d-flex flex-row">
          <div>
            <span className="icon-calendar" onClick={calendarFunction} style={{ cursor: 'pointer' }}>
              <FaCalendarMinus id="calendarIcon" />
            </span>
            <div
              id="containerCalendar"
              className="calender-content"
              ref={calendarContainerRef}
              style={{ display: 'none' }}
            >
              <div className="container-calendar">
                <div className="calendarHead flex flex-row items-start gap-4 mb-2">
                  <div className="flex flex-col items-center">
                    <h4
                      id="fromButton"
                      onClick={choice1}
                      ref={fromButtonRef}
                      style={{
                        cursor: 'pointer',
                        ...(activeDate === 'from' && { color: '#6A6D70', borderBottom: '1px solid #6A6D70' })
                      }}
                    >
                      From
                    </h4>
                    {activeDate === 'from' && (
                      <input
                        type="date"
                        value={fromDate}
                        onChange={e => setFromDate(e.target.value)}
                        style={{ marginLeft: 8 }}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-center">
                    <h4
                      className="toSpan"
                      id="toButton"
                      onClick={choice2}
                      ref={toButtonRef}
                      style={{
                        cursor: 'pointer',
                        ...(activeDate === 'to' && { color: '#6A6D70', borderBottom: '1px solid #6A6D70' })
                      }}
                    >
                      To
                    </h4>
                    {activeDate === 'to' && (
                      <input
                        type="date"
                        value={toDate}
                        onChange={e => setToDate(e.target.value)}
                        style={{ marginLeft: 8 }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="calender-status">
            <select
              value={period}
              onChange={e => {
                setPeriod(e.target.value);
                setFromDate("");
                setToDate("");
              }}
            >
              <option value="0">This week</option>
              <option value="1">Today</option>
              <option value="2">This week</option>
              <option value="3">This month</option>
              <option value="4">This year</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card income d-flex flex-column">
        <div className="row">
          <div className="col-lg-1 icon">
            <i className='bx bx-money'></i>
          </div>
          <div className="col-lg-11 incomeDesc">
            Showing results
            {fromDate && toDate ? (
              <>
                {' '}from <b>{fromDate}</b> to <b>{toDate}</b>
              </>
            ) : (
              <> for <b>{periodLabels[period]}</b> :</>
            )}
          </div>
        </div>
        <div className="desc">
          <p>
            Total Income : <span className="money">50,000 USD</span>{' '}
            <span className="upPer">+34% <i className='bx bx-up-arrow-alt'></i></span>
          </p>
        </div>
      </div>
    </section>
  );
}
