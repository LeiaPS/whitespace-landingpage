import { FC } from "react";
import { YourWorkType } from "../../../ts/youWork";
import { Btn } from "../btn";

type YourWorkProps = {
  
    itemsYourWork: YourWorkType
};
export const YourWork: FC<YourWorkProps> = ({itemsYourWork}) => {
  return (
    <section className="bg-primary-dark relative flex items-center">
      <div className="flex relative flex-col gap-6 px-96 py-20 text-white items-center">
        <h1 className="font-bold text-4xl">{itemsYourWork.title}</h1>
        <p className="text-sm text-center">{itemsYourWork.text}</p>
        <Btn text={itemsYourWork.titleBtn} className="default bg-primary-light" />
      </div>
      <div className="absolute place-content-start">
        <svg
          width="580"
          height="500"
          viewBox="0 0 502 837"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <path
              opacity="0.66"
              d="M410.672 316.896C412.274 322.874 412.131 330.568 410.02 341.326C404.149 369.949 373.14 405.997 340.336 444.074C322.332 465.025 303.702 486.661 289.206 507.274C261.567 539.107 248.667 583.979 236.148 627.415C227.016 659.148 218.358 689.121 204.488 714.255L204.457 714.306C193.536 733.317 180.979 744.207 166.096 747.593C137.054 754.214 103.419 731.101 64.4752 704.292L60.7287 701.727C31.7484 681.882 -6.46621 657.459 -63.1268 622.453L-67.8009 619.448C-117.137 587.769 -178.543 548.315 -225.4 488.449C-328.276 370.955 -308.43 238.684 -262.542 186.307C-207.641 129.794 -137.356 114.574 6.20945 128.057C155.928 142.342 291.28 226.578 342.51 262.135C360.397 277.513 374.932 286.261 385.544 292.621C398.961 300.724 407.748 305.982 410.672 316.896ZM199.513 711.803C213.081 687.224 221.636 657.537 230.717 626.117C243.37 582.173 256.465 536.69 284.731 504.173C299.216 483.519 317.951 461.77 336.028 440.756C368.341 403.197 398.87 367.708 404.487 340.486C409.675 313.679 402.808 309.541 382.418 297.243C371.638 290.757 356.839 281.863 338.836 266.388C288.177 231.28 153.837 147.633 5.4537 133.463C-136.04 120.156 -205.098 134.919 -258.443 189.853C-302.942 240.697 -321.977 369.783 -221.048 485.046C-174.626 544.298 -113.652 583.481 -64.6853 614.958L-60.022 617.923C-3.30869 652.958 34.9587 677.41 64.0024 697.323L67.7489 699.889C105.595 725.959 138.291 748.42 164.835 742.383C178.101 739.345 189.413 729.347 199.513 711.803Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M374.828 335.231C377.042 343.496 376.616 352.986 374.931 366.339L374.911 366.603C368.974 392.965 344.621 419.101 318.87 446.73C301.252 465.599 283.093 485.13 268.487 506.676C243.851 538.135 227.659 573.739 211.996 608.126C201.498 631.238 191.561 653.081 179.458 673.053L179.197 673.424C142.424 717.338 116.338 699.901 68.9571 668.3C63.8074 664.863 58.3834 661.242 52.6118 657.499C42.4968 649.802 31.3283 641.699 19.4842 633.089C-33.1809 594.862 -105.301 542.453 -174.587 459.825C-251.721 356.808 -242.2 258.697 -198.578 207.099C-152.711 154.814 -81.589 151.282 41.9659 163.117C167.855 178.626 263.862 242.784 315.433 277.261L321.184 281.096C356.185 307.627 370.527 319.181 374.828 335.231ZM369.356 365.683C373.898 329.244 369.214 324.521 317.805 285.442L312.212 281.694C261.032 247.499 165.742 183.837 41.2834 168.46C-80.2 156.801 -150.041 160.076 -194.217 210.446C-236.441 260.38 -245.368 355.836 -170.046 456.458C-101.279 538.493 -29.4542 590.638 22.958 628.76C34.8022 637.37 45.9707 645.473 56.0222 653.101C61.6356 656.758 67.0596 660.379 72.2512 663.805C119.685 695.434 141.381 709.92 174.743 670.231C186.617 650.578 196.429 628.94 206.854 606.063C222.61 571.35 238.959 535.489 263.897 503.649C278.627 481.897 296.965 462.19 314.717 443.155C339.874 416.158 363.663 390.604 369.356 365.683Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M344.99 350.795C347.817 361.348 346.495 372.195 343.048 386.193C335.666 410.018 313.484 433.508 290.048 458.366C276.096 473.114 261.705 488.41 249.149 504.848C228.871 528.559 213.051 554.473 197.71 579.484C185.126 600.015 173.272 619.405 160.054 635.72L159.845 635.948C123.757 671.507 97.2159 651.869 49.012 616.188L48.4524 615.779L40.2033 609.001C-6.63106 570.373 -70.788 517.465 -128.584 436.919C-192.224 340.607 -174.295 263.639 -139.674 226.968C-102.756 187.789 -41.569 178.576 71.5148 195.151C150.692 208.083 228.131 243.069 301.671 299.097C328.384 321.226 340.947 335.708 344.99 350.795ZM155.693 632.373C168.629 616.349 180.4 597.153 192.817 576.839C208.241 551.633 224.238 525.543 244.684 501.615C257.291 485.034 271.839 469.653 285.896 454.791C308.925 430.429 330.647 407.406 337.617 384.896C345.539 353.013 341.536 339.248 298.028 303.299C225.238 247.886 148.663 213.271 70.4749 200.505C-40.4524 184.254 -100.161 192.942 -135.606 230.565C-171.522 268.616 -181.859 346.216 -123.946 433.913C-66.5954 513.804 -2.77636 566.459 43.8675 604.88L52.4546 611.911C100.996 647.845 123.219 664.297 155.693 632.373Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M317.12 362.304C320.281 374.101 319.009 386.311 314.01 400.897L313.989 400.988C305.631 423.183 284.552 444.915 262.283 467.912C251.952 478.551 241.319 489.571 231.446 501.076C216.69 516.856 203.599 533.48 190.989 549.546C175.49 569.267 160.835 587.945 145.447 601.702C112.085 627.456 86.292 609.768 47.6736 577.626C10.2856 543.864 -44.3182 490.847 -87.2927 419.446C-122.994 349.838 -125.06 291.087 -93.1969 253.864C-58.881 213.705 9.73849 203.016 95.0842 224.53C194.094 244.49 263.718 299.332 282.671 315.67C302.136 333.247 313.142 347.458 317.12 362.304ZM308.682 399.314C317.977 372.052 315.888 353.173 278.807 319.716C260.149 303.642 191.434 249.504 93.6656 229.813C10.4463 208.848 -56.065 218.842 -88.8673 257.263C-119.217 292.747 -116.859 349.399 -82.2739 416.854C-39.7243 487.508 14.4674 540.163 51.5488 573.62C91.2765 606.712 113.164 619.899 141.902 597.706C156.736 584.399 171.224 565.938 186.588 546.382C199.302 530.202 212.413 513.486 227.284 497.632C237.147 486.087 247.905 475.033 258.267 464.344C280.055 441.733 300.706 420.417 308.682 399.314Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M291.333 371.494C294.688 384.013 293.282 396.732 287.504 411.096L287.296 411.496C251.085 470.268 154.57 554.144 135.613 570.363L135.152 570.658C106.18 587.108 82.9771 573.715 50.3072 543.29C20.8515 514.284 -20.4116 467.067 -49.951 406.689C-75.3234 350.612 -74.0847 303.189 -46.4769 273.084C-15.7991 239.663 42.3272 231.786 113 251.426C180.34 267.357 235.205 302.714 264.065 330.504C278.867 345.117 287.774 358.212 291.333 371.494ZM282.363 409.033C293.306 381.544 287.246 361.278 260.021 334.383C231.7 307.094 177.774 272.388 111.434 256.662C43.8248 237.879 -13.5998 245.352 -42.2937 276.608C-68.3772 305.014 -69.3023 350.418 -44.815 404.366C-15.6058 464.016 25.2441 510.698 54.3513 539.411C85.5945 568.541 106.257 580.68 132.193 566.161C186.649 519.573 254.623 453.924 282.363 409.033Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M267.611 380.172C271.202 393.574 269.651 406.419 262.981 417.624C236.764 462.322 171.396 519.059 129.083 541.965C119.105 546.531 108.228 546.736 96.7059 542.684C61.1905 530.182 18.9831 476.251 -16.1898 398.374C-33.1592 353.679 -29.4552 315.959 -5.76194 292.064C21.0864 265.001 69.1673 259.257 126.098 276.3C198.429 298.936 250.452 335.27 265.364 373.463C266.281 375.712 267.02 377.965 267.611 380.172ZM-16.4938 379.274C-15.0101 384.812 -13.1788 390.471 -10.958 396.241C23.5545 472.661 64.5891 525.572 98.7455 537.536C108.878 541.1 118.241 540.957 126.616 537.121C168.059 514.663 232.382 458.895 258.13 414.967C265.008 403.362 265.703 389.672 260.131 375.425C245.795 338.711 195.03 303.545 124.321 281.421C70.328 265.268 23.2114 270.582 -1.72515 295.713C-20.8113 314.976 -25.8798 344.245 -16.4938 379.274Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M244.193 385.114C247.526 397.552 246.264 409.631 240.411 420.36C219.663 458.604 166.067 503.198 125.741 515.724L125.657 515.746C88.1452 526.012 41.2968 474.573 14.3444 393.46C4.05544 358.587 9.33382 329.262 29.3076 310.793C52.1974 289.607 90.7239 285.477 135.045 299.448C189.036 316.935 228.919 346.243 241.764 377.895C242.735 380.344 243.559 382.746 244.193 385.114ZM124.176 510.552C163.284 498.353 215.301 455.085 235.436 417.908C241.621 406.575 241.984 393.49 236.522 379.987C224.243 349.776 185.606 321.595 133.142 304.602C90.8849 291.283 54.3947 294.954 33.0937 314.681C14.7506 331.681 9.93329 359.033 19.6632 391.82C45.2661 468.735 90.2205 519.822 124.176 510.552Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M221.84 389.167C224.754 400.041 223.872 410.685 219.127 420.343C202.609 454.228 159.492 486.725 124.931 491.384C91.6167 495.321 55.2084 451.449 42.0265 391.676C36.634 365.339 42.6812 343.248 58.9938 329.416C77.6906 313.568 107.343 310.569 140.304 321.262C178.931 333.962 208.401 356.471 219.145 381.46C220.285 384.036 221.152 386.599 221.84 389.167ZM49.7782 399.619C63.8196 452.023 95.5644 489.404 124.342 485.994C156.603 481.65 198.537 449.943 214.079 418.126C219.187 407.64 219.147 395.738 213.966 383.622C203.808 359.981 175.544 338.612 138.39 326.376C107.398 316.317 79.7931 318.897 62.6334 333.429C47.931 345.884 42.5667 366.158 47.5055 390.466C48.2387 393.538 48.9718 396.61 49.7782 399.619Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M200.38 392.683C202.724 401.43 202.208 410.083 198.83 418.127C187.09 446.002 154.508 468.623 126.193 468.555C98.1401 468.287 72.3358 434.776 67.4457 392.349C65.4089 373.499 71.2522 357.699 83.9103 347.856C98.2421 336.705 119.628 334.587 142.585 342.026C168.817 350.608 188.828 366.19 197.453 384.78C198.688 387.373 199.67 390.034 200.38 392.683ZM126.36 463.134C152.069 463.213 182.881 441.711 193.637 416.207C197.461 407.141 197.012 397.069 192.348 387.051C184.416 370.039 165.113 355.084 140.702 347.089C119.62 340.266 100.219 342.067 87.4035 351.995C76.304 360.603 71.2178 374.695 73.0537 391.621C77.525 430.805 101.46 462.882 126.36 463.134Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M179.556 395.896C181.18 401.955 181.112 408.252 178.963 414.332C171.938 434.621 149.408 449.259 128.784 447.001C108.233 444.681 91.2242 421.328 90.8864 394.883C90.7184 382.672 95.5755 372.425 104.481 366.039C114.298 359.022 128.12 357.555 142.357 361.997C161.911 368.154 175.664 381.371 179.556 395.896ZM173.677 412.738C179.741 395.244 164.904 374.792 140.538 367.129C128.07 363.245 116.096 364.389 107.797 370.354C100.398 375.648 96.3721 384.296 96.5083 394.71C96.8305 418.578 111.65 439.637 129.551 441.635C147.672 443.618 167.458 430.661 173.677 412.738Z"
              fill="#A7CEFC"
            />
            <path
              opacity="0.66"
              d="M159.208 399.37C160.09 402.66 160.152 406.084 159.258 409.463C156.196 421.035 144.06 428.63 132.16 426.357C120.406 424.131 111.724 411.706 112.833 398.722C113.363 392.473 116.359 387.198 121.331 383.93C126.565 380.464 133.528 379.587 140.403 381.572C150.121 384.43 157.068 391.385 159.208 399.37ZM119.145 406.664C121.091 413.927 126.581 419.81 133.41 421.119C142.365 422.806 151.537 417.079 153.817 408.297C156.151 399.544 149.334 389.888 138.659 386.813C133.342 385.271 128.321 385.842 124.427 388.434C120.91 390.752 118.778 394.549 118.385 399.127C118.222 401.708 118.5 404.257 119.145 406.664Z"
              fill="#A7CEFC"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};
