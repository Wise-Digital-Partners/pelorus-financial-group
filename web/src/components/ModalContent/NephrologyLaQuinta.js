import React from "react";
import Accordion from "../Accordion/Accordion";

import NephrologyLaQuinta from "../Form/NephrologyLaQuinta";

const ModalContent = () => {
  const dayOfWeek = new Date().getDay();
  let dayHours = "";

  dayOfWeek === 0 && (dayHours = "Sunday — Closed");
  dayOfWeek === 2 && (dayHours = "Monday — 8:00am - 5:00pm");
  dayOfWeek === 2 && (dayHours = "Tuesday — 8:00am - 5:00pm");
  dayOfWeek === 3 && (dayHours = "Wednesday — 8:00am - 5:00pm");
  dayOfWeek === 4 && (dayHours = "Thursday — 8:00am - 5:00pm");
  dayOfWeek === 5 && (dayHours = "Friday — 8:00am - 5:00pm");
  dayOfWeek === 6 && (dayHours = "Saturday — Closed");

  return (
    <>
      <p className="font-heading text-xl text-gray-900 font-semibold mb-8">
        Coachella Valley Nephrology - La Quinta
      </p>

      <div className="grid md:grid-cols-2 md:gap-x-18 gap-y-4 text-sm mb-8">
        <div>
          <div className="mb-4">
            <div className="font-bold text-gray-900 mb-1">Address</div>
            <a
              href="https://goo.gl/maps/7MykTPcrecut5TKG6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-800"
            >
              <address className="not-italic">
                43576 Washington St., #100 La Quinta, CA 92253
              </address>
            </a>
          </div>
          <div>
            <div className="font-bold text-gray-900 mb-1">Phone Number</div>
            <a href="tel:+760-200-1000" className="hover:text-primary-800">
              (760) 200-1000
            </a>
          </div>
        </div>

        <div>
          <div className="font-bold text-gray-900 mb-1">Business Hours</div>

          <Accordion title={dayHours}>
            <div className="flex flex-col space-y-1 max-w-[210px]">
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-gray-900">Monday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-gray-900">Tuesday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-gray-900">Wednesday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-gray-900">Thursday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-gray-900">Friday</b>
                </div>
                <div>8:00am - 5:00pm</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-gray-900">Saturday</b>
                </div>
                <div>Closed</div>
              </div>
              <div className="flex justify-between space-x-1">
                <div>
                  <b className="text-gray-900">Sunday</b>
                </div>
                <div>Closed</div>
              </div>
            </div>
          </Accordion>
        </div>
      </div>

      <NephrologyLaQuinta />
    </>
  );
};

export default ModalContent;
