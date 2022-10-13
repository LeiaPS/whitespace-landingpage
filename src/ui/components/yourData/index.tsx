import { FC } from "react";
import { YourDataType } from "../../../ts/yourData";
import { Btn } from "../btn";

type YourDataProps = {
  yourDataItems: YourDataType;
};
export const YourData: FC<YourDataProps> = ({ yourDataItems }) => {
  return (
    <section className="flex px-40">
      <div className="flex-col flex-1 px-20 py-20">
        <h1 className="font-bold text-slate-500 text-4xl">{yourDataItems.title}</h1>
        <p className="text-sm text-slate-500 py-8">{yourDataItems.text}</p>
        <Btn
          text={yourDataItems.titleBtn}
          className="default text-white bg-primary-light"
        />
      </div>
      <div className="flex-1 flex justify-center">
        <svg
          width="450"
          height="450"
          viewBox="0 0 759 401"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.66"
            d="M679.368 316.957C679.368 151.345 545.112 17.0894 379.5 17.0894C213.888 17.0894 79.6325 151.345 79.6325 316.957"
            stroke="#A7CEFC"
            stroke-width="2"
            stroke-dasharray="15 15"
          />
          <line
            opacity="0.66"
            x1="78.0072"
            y1="315.457"
            x2="679.367"
            y2="315.457"
            stroke="#A7CEFC"
            stroke-width="3"
            stroke-dasharray="15 15"
          />
          <line
            opacity="0.66"
            x1="200.311"
            y1="75.5382"
            x2="326.271"
            y2="251.07"
            stroke="#A7CEFC"
            stroke-width="3"
            stroke-dasharray="15 15"
          />
          <line
            opacity="0.66"
            x1="580.97"
            y1="94.5037"
            x2="456.252"
            y2="252.063"
            stroke="#A7CEFC"
            stroke-width="3"
            stroke-dasharray="15 15"
          />
          <rect
            opacity="0.66"
            x="324.115"
            y="250.194"
            width="133.525"
            height="133.525"
            rx="8.5"
            stroke="#A7CEFC"
            stroke-width="3"
            stroke-dasharray="15 15"
          />
          <g opacity="0.66" filter="url(#filter0_d_9_2402)">
            <rect
              x="350.245"
              y="276.324"
              width="81.2649"
              height="81.2649"
              rx="10"
              fill="white"
            />
          </g>
          <g opacity="0.66" filter="url(#filter1_d_9_2402)">
            <rect
              x="39"
              y="276.324"
              width="81.2649"
              height="81.2649"
              rx="10"
              fill="white"
            />
          </g>
          <path
            opacity="0.66"
            d="M77.8097 320.086C77.4196 320.086 77.0296 319.937 76.7324 319.639C76.1374 319.044 76.1374 318.08 76.7324 317.485L86.6069 307.61C87.2011 307.015 88.1672 307.015 88.7614 307.61C89.3564 308.205 89.3564 309.17 88.7614 309.765L78.887 319.639C78.5899 319.937 78.1998 320.086 77.8097 320.086V320.086Z"
            fill="#FFE492"
          />
          <path
            opacity="0.66"
            d="M77.8092 320.086C77.4191 320.086 77.0298 319.937 76.7319 319.64L71.7539 314.662C71.1589 314.067 71.1589 313.103 71.7539 312.508C72.3482 311.913 73.3135 311.913 73.9085 312.508L78.8864 317.485C79.4815 318.08 79.4815 319.045 78.8864 319.64C78.5893 319.937 78.1992 320.086 77.8092 320.086V320.086Z"
            fill="#FFE492"
          />
          <path
            opacity="0.66"
            d="M79.631 335.952C79.4726 335.952 79.3118 335.927 79.1534 335.875C69.4138 332.662 62.8702 323.613 62.8702 313.356C62.8702 312.515 63.5528 311.833 64.3939 311.833C65.235 311.833 65.9176 312.515 65.9176 313.356C65.9176 322.294 71.6201 330.181 80.108 332.981C80.9072 333.245 81.3414 334.106 81.0778 334.905C80.8668 335.546 80.271 335.952 79.631 335.952V335.952Z"
            fill="#FFE492"
          />
          <path
            opacity="0.66"
            d="M64.3939 314.88C63.5528 314.88 62.8702 314.198 62.8702 313.356V302.577C62.8702 301.736 63.5528 301.053 64.3939 301.053C65.235 301.053 65.9176 301.736 65.9176 302.577V313.356C65.9176 314.198 65.235 314.88 64.3939 314.88Z"
            fill="#FFE492"
          />
          <path
            opacity="0.66"
            d="M64.3945 304.101C63.6464 304.101 62.9935 303.549 62.8868 302.787C62.771 301.953 63.3523 301.184 64.1865 301.068C69.3337 300.353 74.3017 298.814 78.9537 296.496C79.7071 296.121 80.6221 296.427 80.997 297.18C81.3726 297.934 81.0655 298.848 80.3128 299.224C75.3645 301.689 70.0803 303.325 64.6056 304.086C64.5347 304.096 64.4639 304.101 64.3945 304.101V304.101Z"
            fill="#FFE492"
          />
          <path
            opacity="0.66"
            d="M79.6325 335.952C78.9933 335.952 78.3967 335.546 78.1857 334.906C77.9221 334.106 78.3563 333.245 79.1555 332.981C87.6434 330.182 93.3459 322.295 93.3459 313.356C93.3459 312.515 94.0285 311.833 94.8696 311.833C95.7107 311.833 96.3933 312.515 96.3933 313.356C96.3933 323.613 89.8497 332.663 80.1094 335.875C79.9509 335.928 79.7909 335.952 79.6325 335.952V335.952Z"
            fill="#FFE492"
          />
          <path
            opacity="0.66"
            d="M94.8705 314.88C94.0294 314.88 93.3467 314.198 93.3467 313.356V302.577C93.3467 301.736 94.0294 301.053 94.8705 301.053C95.7115 301.053 96.3942 301.736 96.3942 302.577V313.356C96.3942 314.198 95.7115 314.88 94.8705 314.88Z"
            fill="#FFE492"
          />
          <path
            opacity="0.66"
            d="M94.8719 304.101C94.8019 304.101 94.731 304.096 94.6601 304.086C89.1854 303.325 83.9012 301.689 78.9529 299.224C78.2002 298.848 77.8932 297.934 78.2688 297.18C78.6436 296.427 79.5586 296.121 80.3121 296.496C84.964 298.814 89.9321 300.353 95.0792 301.068C95.9126 301.184 96.4947 301.954 96.3789 302.787C96.2738 303.549 95.6209 304.101 94.8719 304.101V304.101Z"
            fill="#FFE492"
          />
          <g opacity="0.66" filter="url(#filter2_d_9_2402)">
            <rect
              x="638.735"
              y="276.324"
              width="81.2649"
              height="81.2649"
              rx="10"
              fill="white"
            />
          </g>
          <g clip-path="url(#clip0_9_2402)">
            <path
              opacity="0.66"
              d="M693.08 310.481H689.648V302.65C689.648 297.096 685.034 292.577 679.363 292.577C673.692 292.577 669.078 297.096 669.078 302.65V310.481H665.653C662.502 310.481 659.939 313.044 659.939 316.195V335.622C659.939 338.773 662.502 341.336 665.653 341.336H693.08C696.231 341.336 698.794 338.773 698.794 335.622V316.195C698.794 313.044 696.231 310.481 693.08 310.481ZM672.887 302.65C672.887 299.196 675.792 296.387 679.363 296.387C682.934 296.387 685.839 299.196 685.839 302.65V310.481H672.887V302.65V302.65ZM694.985 335.622C694.985 336.673 694.13 337.527 693.08 337.527H665.653C664.603 337.527 663.749 336.673 663.749 335.622V316.195C663.749 315.145 664.603 314.29 665.653 314.29H693.08C694.13 314.29 694.985 315.145 694.985 316.195V335.622Z"
              fill="#4F9CF9"
            />
            <path
              opacity="0.66"
              d="M679.367 319.814C677.421 319.814 675.844 321.391 675.844 323.337C675.844 324.58 676.487 325.671 677.459 326.299V330.48C677.459 331.532 678.312 332.384 679.364 332.384C680.415 332.384 681.268 331.532 681.268 330.48V326.303C682.244 325.677 682.891 324.583 682.891 323.337C682.891 321.391 681.313 319.814 679.367 319.814Z"
              fill="#4F9CF9"
            />
          </g>
          <g opacity="0.66" filter="url(#filter3_d_9_2402)">
            <rect
              x="538.779"
              y="35.7803"
              width="81.2649"
              height="81.2649"
              rx="10"
              fill="white"
            />
          </g>
          <g clip-path="url(#clip1_9_2402)">
            <path
              opacity="0.66"
              d="M571.708 52.0332C561.881 52.0332 555.032 55.4458 555.032 58.5087C555.032 61.5715 561.881 64.9841 571.708 64.9841C581.535 64.9841 588.384 61.5714 588.384 58.5087C588.384 55.4459 581.536 52.0332 571.708 52.0332Z"
              fill="#FFE492"
            />
            <path
              opacity="0.66"
              d="M555.032 88.2601V94.3166C555.032 97.3795 561.881 100.792 571.708 100.792C576.113 100.792 580.27 100.098 583.414 98.8386C585.464 98.0176 586.981 96.9993 587.77 95.9411C586.283 94.7776 584.566 93.1046 583.07 90.7963C579.777 91.8507 575.885 92.4039 571.708 92.4039C566.453 92.4039 561.537 91.4986 557.866 89.8547C556.795 89.3752 555.848 88.8409 555.032 88.2601V88.2601Z"
              fill="#FFE492"
            />
            <path
              opacity="0.66"
              d="M555.032 76.3516L555.032 82.3255C555.032 85.3882 561.881 88.8008 571.708 88.8008C575.193 88.8008 578.537 88.3638 581.339 87.5551C580.323 85.2063 579.666 82.6135 579.377 79.8078C576.98 80.2585 574.369 80.4938 571.708 80.4938C566.419 80.4938 561.48 79.5782 557.801 77.9157C556.757 77.4437 555.831 76.9197 555.032 76.3516V76.3516Z"
              fill="#FFE492"
            />
            <path
              opacity="0.66"
              d="M555.032 64.4377V70.4157C555.032 73.4785 561.881 76.8912 571.708 76.8912C574.337 76.8912 576.899 76.6435 579.205 76.1702C579.209 75.6041 579.378 74.1308 580.742 73.7563C582.891 73.1662 584.395 71.7497 584.528 69.8066C584.583 69.0067 585.584 67.8858 586.33 67.8969H588.384V64.4377C587.585 65.0059 586.66 65.53 585.616 66.0025C581.932 67.6691 576.993 68.5869 571.708 68.5869C566.424 68.5869 561.485 67.6691 557.801 66.0025C556.756 65.53 555.831 65.0059 555.032 64.4377V64.4377Z"
              fill="#FFE492"
            />
            <path
              opacity="0.66"
              d="M598.683 71.5H587.935C587.334 73.9987 585.412 76.0485 582.813 76.9424C583.016 88.9363 589.91 93.5098 592.949 94.9437C593.123 95.0256 593.329 95.0168 593.5 94.9205C596.552 93.201 603.47 88.0828 603.792 76.9382C601.199 76.0423 599.283 73.9949 598.683 71.5V71.5ZM592.665 87.1192C591.935 87.8695 590.68 87.8283 590.001 87.0319L586.576 83.0131L589.319 80.6764L591.46 83.1889L597.434 77.045L600.018 79.5562L592.665 87.1192Z"
              fill="#FFE492"
            />
          </g>
          <g opacity="0.66" filter="url(#filter4_d_9_2402)">
            <rect
              x="158.459"
              y="35.7803"
              width="81.2649"
              height="81.2649"
              rx="10"
              fill="white"
            />
          </g>
          <g clip-path="url(#clip2_9_2402)">
            <path
              opacity="0.66"
              d="M217.25 56.6289C211.123 50.5014 201.153 50.5015 195.025 56.6289C190.84 60.814 189.387 66.9831 191.198 72.5787L173.506 90.2714C173.238 90.5393 173.087 90.9027 173.087 91.2816V99.3636C173.087 100.153 173.727 100.792 174.516 100.792H182.598C182.977 100.792 183.34 100.642 183.608 100.374L185.629 98.3529C185.938 98.0441 186.088 97.6113 186.038 97.1776L185.786 95.0079L188.793 94.7244C189.476 94.6601 190.017 94.1192 190.082 93.4362L190.365 90.428L192.535 90.6802C192.94 90.7275 193.346 90.5992 193.65 90.328C193.955 90.057 194.129 89.6687 194.129 89.2611V86.6005H196.741C197.117 86.6005 197.478 86.4522 197.746 86.1878L201.295 82.6793C206.892 84.4935 213.064 83.0406 217.251 78.8542C223.378 72.7267 223.378 62.7564 217.25 56.6289ZM215.23 76.8338C211.624 80.4398 206.215 81.5653 201.45 79.7016C200.924 79.496 200.326 79.6193 199.925 80.0161L196.154 83.7431H192.7C191.911 83.7431 191.272 84.3828 191.272 85.1718V87.6567L189.245 87.4212C188.863 87.3769 188.48 87.4881 188.181 87.7298C187.882 87.9716 187.694 88.3235 187.658 88.7061L187.348 91.9906L184.064 92.3001C183.681 92.3362 183.329 92.5249 183.087 92.8236C182.845 93.1223 182.734 93.5058 182.778 93.8875L183.12 96.8211L182.006 97.935H175.944V91.8736L193.857 73.9607C194.259 73.5593 194.384 72.9585 194.178 72.43C192.314 67.6647 193.439 62.2557 197.045 58.6496C202.059 53.6362 210.216 53.6362 215.23 58.6496C220.243 63.6629 220.243 71.8204 215.23 76.8338Z"
              fill="#4F9CF9"
            />
            <path
              opacity="0.66"
              d="M213.209 60.6699C211.537 58.9987 208.818 58.9988 207.147 60.6699C205.476 62.341 205.476 65.0602 207.147 66.7313C208.818 68.4025 211.537 68.4027 213.209 66.7313C214.88 65.0602 214.88 62.341 213.209 60.6699ZM211.188 64.7109C210.631 65.2679 209.725 65.268 209.168 64.7109C208.611 64.1539 208.611 63.2475 209.168 62.6904C209.726 62.132 210.63 62.132 211.188 62.6904C211.747 63.2489 211.746 64.1524 211.188 64.7109Z"
              fill="#4F9CF9"
            />
          </g>
          <circle
            opacity="0.66"
            cx="381.938"
            cy="17.0893"
            r="13.0024"
            fill="#A7CEFC"
          />
          <circle
            opacity="0.66"
            cx="283.607"
            cy="194.247"
            r="13.0024"
            fill="#A7CEFC"
          />
          <circle
            opacity="0.66"
            cx="562.346"
            cy="316.957"
            r="13.0024"
            fill="#A7CEFC"
          />
          <g clip-path="url(#clip3_9_2402)">
            <path
              opacity="0.66"
              d="M364 300.267V309.349C364 312.115 367.454 313.59 369.565 311.654L379.641 302.572C381.848 300.59 380.408 297.086 377.386 297.086H367.31C365.487 297.086 364 298.516 364 300.267Z"
              fill="#5986EF"
            />
            <path
              opacity="0.66"
              d="M411.69 297.086H401.614C398.64 297.086 397.152 300.59 399.359 302.572L409.435 311.654C411.546 313.544 415 312.115 415 309.349V300.267C415 298.516 413.513 297.086 411.69 297.086Z"
              fill="#5986EF"
            />
            <path
              opacity="0.66"
              d="M391.779 319.26L409.435 335.211C411.546 337.101 415 335.672 415 332.906V323.732C415 322.856 414.616 322.026 413.944 321.427L391.779 301.374C390.484 300.221 388.516 300.221 387.221 301.374L365.056 321.427C364.384 322.026 364 322.856 364 323.732V332.906C364 335.672 367.454 337.147 369.565 335.211L387.221 319.26C388.516 318.108 390.484 318.108 391.779 319.26Z"
              fill="#5986EF"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_9_2402"
              x="311.245"
              y="241.324"
              width="159.265"
              height="159.265"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="11"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_9_2402"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_2402"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_2402"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_9_2402"
              x="0"
              y="241.324"
              width="159.265"
              height="159.265"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="11"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_9_2402"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_2402"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_2402"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_9_2402"
              x="599.735"
              y="241.324"
              width="159.265"
              height="159.265"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="11"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_9_2402"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_2402"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_2402"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_9_2402"
              x="499.779"
              y="0.780273"
              width="159.265"
              height="159.265"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="11"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_9_2402"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_2402"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_2402"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_9_2402"
              x="119.459"
              y="0.780273"
              width="159.265"
              height="159.265"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="11"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_9_2402"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_9_2402"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_9_2402"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_9_2402">
              <rect
                width="48.7589"
                height="48.7589"
                fill="white"
                transform="translate(654.988 292.577)"
              />
            </clipPath>
            <clipPath id="clip1_9_2402">
              <rect
                width="48.7589"
                height="48.7589"
                fill="white"
                transform="translate(555.032 52.0332)"
              />
            </clipPath>
            <clipPath id="clip2_9_2402">
              <rect
                width="48.7589"
                height="48.7589"
                fill="white"
                transform="translate(173.087 52.0332)"
              />
            </clipPath>
            <clipPath id="clip3_9_2402">
              <rect
                width="51"
                height="39"
                fill="white"
                transform="translate(364 297.086)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
};
