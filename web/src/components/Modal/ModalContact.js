import React from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
// import tw from "twin.macro";

import Contact from "../Form/Contact";

const StyledModal = styled.div`
  .modal {
    &[aria-hidden="false"] {
      .overlay {
        animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="false"] {
      .content-wrapper {
        animation: mmslideIn 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .overlay {
        animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
    &[aria-hidden="true"] {
      .content-wrapper {
        animation: mmslideOut 0.5s cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Modal = () => {
  if (typeof window !== "undefined") {
    MicroModal.init({
      openTrigger: "data-modal-open",
      closeTrigger: "data-modal-close",
      disableFocus: true,
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
    });
  }

  return (
    <StyledModal>
      <div
        className="modal relative hidden z-50"
        id="modal-contact"
        aria-hidden="false"
      >
        <div
          className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black/40 outline-none"
          tabIndex="-1"
          data-modal-close
        >
          <div
            className="content-wrapper bg-gray-50 w-full h-screen overflow-auto max-w-[720px] ml-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-end items-center pt-12 pb-4 md:py-4 px-5">
              <i
                className="close fal fa-times text-xl text-gray-900 hover:text-primary-800 cursor-pointer transition-all duration-300 ease-linear"
                data-modal-close
              ></i>
            </div>

            <div className="pt-2 px-6 md:px-18 pb-24">
              <header className="mb-7 md:mb-5 border-b border-primary-400">
                <p className="heading-three text-primary-600 mb-3">
                  Contact Us
                </p>
                <p className="text-gray-900">
                  We can assist you in closing your next sale. Contact us today
                  to speak with one of our experts.
                </p>

                <div className="flex items-center space-x-6 mb-8">
                  <a
                    href="tel:760-230-5790"
                    className="text-secondary-400 hover:text-secondary-200 font-semibold"
                  >
                    <i class="fas fa-phone-alt mr-1"></i> (760) 230-5790
                  </a>
                  <a
                    href="mailto:info@pelorusfg.com"
                    className="text-secondary-400 hover:text-secondary-200 font-semibold"
                  >
                    <i class="fas fa-envelope mr-1"></i> info@pelorusfg.com
                  </a>
                </div>
              </header>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
