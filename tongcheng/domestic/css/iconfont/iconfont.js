;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-weixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M829.463 744.035c34.977-31.963 56.202-73.955 56.202-119.942 0-80.035-64.281-147.951-153.463-172.007-5.319-128.245-135.861-230.899-296.145-230.899-163.661 0-296.334 107.019-296.334 239.034 0 60.622 27.978 115.974 74.086 158.111 14.429 13.186-2.465 49.27-23.218 79.081 35.074-9.687 72.485-15.993 105.233-15.993 15.333 0 29.647 1.385 42.214 4.449 30.681 8.67 63.666 13.387 98.018 13.387 6.672 0 13.289-0.198 19.853-0.548 35.266 62.929 113.769 106.72 204.953 106.72 26.060 0 51.084-3.577 74.358-10.157 9.534-2.326 20.39-3.375 32.023-3.375 24.842 0 53.223 4.784 79.831 12.132-15.742-22.614-28.557-49.985-17.611-59.99zM436.058 655.593c-29.597 0-58.58-3.95-86.142-11.741l-0.761-0.215-0.768-0.188c-15.485-3.778-33.168-5.693-52.559-5.693-11.145 0-22.278 0.614-33.163 1.659 2.311-25.584-7.492-42.431-19.399-53.314-19.231-17.573-34.169-37.333-44.398-58.727-10.272-21.486-15.483-44.079-15.483-67.153 0-50.386 25.054-98.343 70.545-135.039 23.228-18.736 50.441-33.502 80.88-43.887 31.985-10.913 66.050-16.446 101.249-16.446s69.264 5.533 101.249 16.446c30.439 10.385 57.651 25.151 80.88 43.887 40.599 32.75 64.903 74.471 69.663 118.881 0.001 0 0.001 0 0.002 0-8.85-0.853-17.854-1.306-26.99-1.306-124.157 0-224.804 81.186-224.804 181.337 0 10.732 1.165 21.247 3.382 31.467-0.001-0.002-0.001-0.002-0.001-0.004-1.13 0.012-2.255 0.036-3.382 0.036zM800.006 711.808c-7.057 6.451-16.362 18.303-18.053 36.854-4.875-0.277-9.791-0.429-14.71-0.429-15.552 0-29.807 1.554-42.369 4.62l-0.768 0.188-0.762 0.213c-19.978 5.648-40.998 8.511-62.481 8.511-25.541 0-50.24-4.009-73.406-11.91-21.921-7.479-41.484-18.084-58.142-31.522-31.982-25.798-49.596-59.266-49.596-94.238 0-34.976 17.614-68.444 49.596-94.241 16.659-13.438 36.22-24.042 58.142-31.522 23.167-7.904 47.865-11.911 73.406-11.911s50.239 4.009 73.405 11.911c21.922 7.481 41.485 18.084 58.143 31.522 31.982 25.797 49.595 59.265 49.595 94.241 0 15.919-3.605 31.529-10.714 46.397-7.174 15.002-17.699 28.905-31.285 41.318z"  ></path>' +
    '' +
    '<path d="M306.019 413.492c0.237-25.199 16.005-45.507 35.423-45.507 19.565 0 35.425 20.619 35.425 46.053 0 25.435-15.86 46.053-35.425 46.053-19.418 0-35.185-20.309-35.422-45.478z"  ></path>' +
    '' +
    '<path d="M490.287 413.492c0.237-25.199 16.005-45.507 35.422-45.507 19.564 0 35.424 20.619 35.424 46.053 0 25.435-15.86 46.053-35.424 46.053-19.417 0-35.184-20.309-35.421-45.478z"  ></path>' +
    '' +
    '<path d="M571.957 590.394c0.237-19.366 12.369-34.948 27.3-34.948 15.079 0 27.303 15.891 27.303 35.494 0 19.603-12.224 35.494-27.303 35.494-14.931 0-27.063-15.582-27.3-34.919z"  ></path>' +
    '' +
    '<path d="M703.491 590.394c0.237-19.366 12.369-34.948 27.301-34.948 15.079 0 27.305 15.891 27.305 35.494 0 19.603-12.225 35.494-27.305 35.494-14.932 0-27.065-15.582-27.301-34.919z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M294.595017 112.379487c21.914102 0 43.298132 9.779737 60.131519 27.421536 12.654204 13.381775 25.00858 27.180036 39.626509 43.769876 30.988782 35.180244 28.195156 83.627652-6.581905 115.158786l-12.377912 11.279904c-15.448854 14.132882-30.0412 27.467585-45.421492 39.463804-19.189038 15.089673-40.527019 42.685171-33.067116 88.522126 6.096858 36.808324 21.290909 73.339332 46.414099 111.61303 45.121664 68.953442 97.377818 120.378671 159.956062 157.312862 20.067035 11.763928 41.450041 19.258623 60.569494 25.966395 9.629311 3.335978 19.396769 5.022387 29.02608 5.022387 15.332197 0 38.171368-4.386914 59.900252-25.238824 16.764825-16.083304 34.43016-31.254841 53.134151-47.304376l5.057179-4.340865c17.594727-15.242146 37.338397-23.288402 57.151651-23.288402 22.560832 0 43.989887 10.253528 62.002123 29.650297 15.471366 16.660448 27.733645 30.28577 38.655392 42.951231 30.573319 35.283598 28.195156 80.485079-5.588275 112.179942-1.016143 0.945535-3.140527 3.069919-6.096858 6.429433-27.27111 30.908964-61.886489 56.505945-102.919021 76.110445-12.724813 4.399193-26.186406 6.559393-41.104163 6.559393-18.24248 0-39.001269-3.313465-63.386656-10.079566-83.430154-23.242354-161.825642-69.448722-246.735497-145.421021-107.814518-96.467075-184.2954-199.328791-233.780441-314.475298-28.680203-66.735937-39.279608-119.372761-34.360576-170.671101 3.324722-34.915207 16.417925-60.708664 41.264822-81.237209 13.300934-11.026124 26.024723-22.421662 38.332027-33.437553 8.197706-7.343245 16.395412-14.696724 24.778336-21.925359C255.801479 119.975489 274.968004 112.379487 294.595017 112.379487M294.595017 65.087391c-30.088272 0-60.431348 11.084453-86.36295 33.517371-20.921495 18.057261-41.011043 37.039591-62.348 54.727439-35.815717 29.580712-53.850465 67.844178-58.168818 113.150036-6.535857 68.258617 11.452843 132.084271 37.986149 193.83159 55.604412 129.36023 141.066853 237.428527 245.719354 331.055928 77.726246 69.553099 163.120125 127.20003 265.554098 155.742087 25.146727 6.972808 50.66389 11.799744 76.086909 11.799744 19.859303 0 39.672558-2.933819 59.231009-10.090822 81.144088-38.193881 118.852922-87.760786 122.917494-91.501994 52.809763-49.554626 56.759725-123.170251 9.305947-177.957041-12.954033-15.007809-26.278503-29.650297-39.74112-44.150546-27.594475-29.719882-61.909002-44.763506-96.662527-44.763506-30.43415 0-61.2152 11.533684-88.11792 34.834366-20.274766 17.410532-40.71019 34.776038-59.969836 53.249785-8.451486 8.104585-17.480116 12.076036-27.155477 12.076036-4.386914 0-8.890484-0.807389-13.554714-2.424212-17.780969-6.236028-35.976376-12.607132-52.141544-22.074761-60.014862-35.423791-106.567108-84.748173-144.276964-142.384871-18.773576-28.588105-33.666774-59.160401-39.325657-93.428879-2.839675-17.458627 0.300852-31.589462 15.633049-43.642986 21.013593-16.395412 40.479947-34.915207 60.293201-52.834322 54.126758-49.094138 58.514695-126.820384 10.344602-181.501774-13.394055-15.19405-26.879184-30.342052-40.780799-45.028543C362.347097 79.265298 328.633251 65.087391 294.595017 65.087391L294.595017 65.087391z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowDown" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M527.929 750.768l438.277-431.027c6.798-6.686 6.891-17.619 0.203-24.42-6.686-6.801-17.62-6.891-24.42-0.203l-426.067 419.018-424.478-424.477c-6.743-6.743-17.677-6.743-24.42 0-3.372 3.372-5.058 7.792-5.058 12.211s1.687 8.84 5.058 12.211l436.584 436.584c6.705 6.705 17.56 6.75 24.32 0.102z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M907.03866 576.835657c-20.639063 0-37.370119 16.731056-37.370119 37.370119L869.668541 869.670076 614.205265 869.670076c-20.638039 0-37.369096 16.731056-37.369096 37.370119 0 20.638039 16.731056 37.369096 37.369096 37.369096l292.833395 0c20.638039 0 37.369096-16.731056 37.369096-37.369096L944.407756 614.204753C944.406732 593.56569 927.676699 576.835657 907.03866 576.835657z"  ></path>' +
    '' +
    '<path d="M116.960317 447.162296c20.638039 0 37.369096-16.730033 37.369096-37.369096L154.329413 154.329924l255.464299 0c20.638039 0 37.369096-16.731056 37.369096-37.369096s-16.730033-37.369096-37.369096-37.369096L116.960317 79.591733c-20.638039 0-37.369096 16.730033-37.369096 37.369096l0 292.833395C79.591221 430.432263 96.322277 447.162296 116.960317 447.162296z"  ></path>' +
    '' +
    '<path d="M409.793712 869.670076 154.329413 869.670076 154.329413 614.204753c0-20.639063-16.730033-37.370119-37.369096-37.370119s-37.369096 16.731056-37.369096 37.370119l0 292.834418c0 20.638039 16.731056 37.369096 37.369096 37.369096l292.833395 0c20.638039 0 37.369096-16.731056 37.369096-37.369096C447.162808 886.400109 430.431751 869.670076 409.793712 869.670076z"  ></path>' +
    '' +
    '<path d="M907.03866 79.591733 614.205265 79.591733c-20.638039 0-37.369096 16.730033-37.369096 37.369096s16.731056 37.369096 37.369096 37.369096l255.464299 0 0 255.464299c0 20.639063 16.731056 37.369096 37.370119 37.369096 20.638039 0 37.369096-16.730033 37.369096-37.369096L944.408779 116.960829C944.406732 96.321766 927.676699 79.591733 907.03866 79.591733z"  ></path>' +
    '' +
    '<path d="M907.03866 471.744157 116.960317 471.744157c-20.638039 0-37.369096 16.731056-37.369096 37.369096 0 20.639063 16.731056 37.369096 37.369096 37.369096l790.07732 0c20.638039 0 37.369096-16.730033 37.369096-37.369096C944.406732 488.47419 927.676699 471.744157 907.03866 471.744157z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-star" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.257507 408.244938c-9.91993-27.341718-34.853809-46.958498-65.074088-51.223638l-202.89399-28.532847-87.85493-172.521239c-13.475919-26.53433-42.293245-43.672662-73.418127-43.672662-31.04711 0-59.883879 17.10047-73.475432 43.6348l-87.836511 172.521239-202.89399 28.570709c-29.701462 4.168949-55.231929 24.266683-65.093531 51.262524-10.246365 28.224832-2.787486 58.832943 19.493983 79.852676l148.143015 139.934053-34.238802 193.464223c-5.402033 30.030967 7.708566 59.428507 34.296107 76.778664 23.896246 15.505136 58.884109 17.292851 84.779895 4.227278l176.787402-90.035596 176.903036 90.074482c11.688203 5.975085 24.991184 9.126868 38.487569 9.126868 16.282848 0 32.68133-4.746094 46.445822-13.526061 26.375717-17.234523 39.429011-46.555315 34.085306-76.432787l-34.276664-193.656605 148.181901-139.91461C944.083879 467.077881 951.542758 436.45135 941.257507 408.244938zM881.220133 445.270203 724.08021 593.658811c-8.900717 8.492418-12.919241 20.732184-10.765181 32.625048l36.429701 205.818599c1.153266 6.417153-1.864464 12.507872-7.977695 16.504906-7.343245 4.707209-18.435884 5.28333-26.049283 1.38351L528.971533 754.901169c-5.229095-2.670829-11.112082-4.092201-17.032932-4.092201-5.959735 0-11.861142 1.440815-16.744359 3.996011l-186.707332 95.089705c-7.305383 3.727904-19.416212 3.13234-25.876344-1.057075-6.478552-4.227278-9.535167-10.375302-8.343015-16.927531l36.411281-205.779713c2.076288-12.027941-2.018983-24.209378-10.9197-32.605605L142.773727 445.25076c-5.036713-4.764514-6.690376-10.894118-4.555759-16.774035 2.384303-6.513344 9.708106-11.874445 17.820877-13.007245l214.275201-30.166043c11.93789-1.690502 22.319331-9.05012 27.740808-19.694551l93.084025-182.839235c3.518127-6.839779 11.900028-11.45182 20.877493-11.45182 8.959046 0 17.302061 4.573155 20.781302 11.412934l93.276407 183.16567c5.498224 10.490935 15.821337 17.772782 27.66406 19.444864l214.216873 30.127158c8.515954 1.191128 15.321964 6.148024 17.801435 12.94994C887.928928 434.356642 886.256846 440.505689 881.220133 445.270203z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-biji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M830.21824 1000.63232 181.72928 1000.63232c-64.4608 0-116.89984-55.69536-116.89984-124.16l0-706.56c0-68.46464 52.43904-124.16 116.89984-124.16l476.78464 0c19.79392 0 35.84 16.04608 35.84 35.84s-16.04608 35.84-35.84 35.84L181.72928 117.43232c-24.9344 0-45.21984 23.54176-45.21984 52.48l0 706.56c0 28.93824 20.28544 52.48 45.21984 52.48l648.48896 0c24.9344 0 45.21984-23.54176 45.21984-52.48L875.43808 316.47744c0-19.79392 16.04608-35.84 35.84-35.84s35.84 16.04608 35.84 35.84l0 559.99488C947.11808 944.92672 894.67904 1000.63232 830.21824 1000.63232zM947.24096 83.41504c-1.91488-3.15392-19.54816-31.34464-50.64704-48.87552-3.40992-1.86368-21.54496-11.17184-43.97056-11.17184-19.95776 0-37.72416 7.2192-51.37408 20.86912l-31.03744 34.74432-330.21952 405.6064c-17.39776 28.45696-32.48128 169.85088-23.0912 177.95072 12.83072 11.06944 162.48832-43.89888 179.34336-68.00384l296.21248-364.8 51.83488-61.2352 0.84992-1.0752C956.2624 152.75008 969.15456 118.46656 947.24096 83.41504zM478.89408 588.97408c0 0 11.63264-48.14848 12.0832-49.24416l32.98304 29.2352C522.89536 569.61024 478.89408 588.97408 478.89408 588.97408zM563.95776 522.31168l-36.17792-32.06144L788.61312 166.5024l37.9392 29.96224L563.95776 522.31168zM891.5968 117.1456l-32.5632 38.36928-36.72064-28.99968 33.91488-39.30112c0.18432-0.02048 0.43008-0.03072 0.74752-0.03072 3.64544 0 8.3456 1.77152 9.1648 2.14016 12.06272 6.8096 21.61664 19.32288 24.41216 23.77728C891.79136 115.10784 891.9552 116.14208 891.5968 117.1456z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-top" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M132.579551 616.921631l92.213191 0 0 240.313228 44.706201 0 0-240.313228 92.213191 0 0-39.117926L132.579551 577.803705 132.579551 616.921631zM132.579551 616.921631"  ></path>' +
    '' +
    '<path d="M518.194072 572.216453c-41.915645 0-78.238922 13.970176-100.596116 41.911552-22.352077 25.15082-33.528628 61.474097-33.528628 103.389742s11.17655 78.243015 33.528628 103.389742c25.15082 27.944446 58.680471 41.915645 100.596116 41.915645s75.445296-13.9712 100.596116-41.915645c22.352077-25.146727 36.323277-61.474097 36.323277-103.389742s-11.17655-78.238922-36.323277-103.389742C596.432994 586.186629 560.109718 572.216453 518.194072 572.216453L518.194072 572.216453zM585.256444 795.760762c-16.764825 19.558451-39.120996 27.940352-67.062372 27.940352-27.945469 0-50.297546-8.381901-67.062372-27.940352-13.970176-19.563568-22.357194-44.710294-22.357194-75.449389 0-30.735002 8.387018-58.680471 22.357194-75.444273 16.764825-19.563568 39.116903-27.945469 67.062372-27.945469 27.941376 0 50.297546 8.381901 67.062372 27.945469 16.768919 19.558451 22.357194 44.709271 22.357194 78.238922C607.613638 751.050468 602.025363 776.197194 585.256444 795.760762L585.256444 795.760762zM585.256444 795.760762"  ></path>' +
    '' +
    '<path d="M814.389028 577.803705 699.822736 577.803705l0 279.431154 44.710294 0L744.533031 751.050468l69.855998 0c67.066465 0 103.389742-27.944446 103.389742-86.624916C914.985144 605.745081 881.455493 577.803705 814.389028 577.803705L814.389028 577.803705zM853.511048 700.752922c-8.382924 8.381901-25.146727 11.17655-44.710294 11.17655l-67.062372 0 0-95.007841 67.062372 0c19.563568 0 36.32737 2.793626 44.710294 11.180644 8.381901 8.381901 13.970176 19.558451 13.970176 36.323277C867.481224 681.19447 864.687598 692.369997 853.511048 700.752922L853.511048 700.752922zM853.511048 700.752922"  ></path>' +
    '' +
    '<path d="M537.752524 205.496258 300.238039 443.011766l463.853443 0L537.752524 205.496258zM537.752524 205.496258"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangshangjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M966.4 668.8l-435.2-432c-9.6-9.6-25.6-9.6-35.2 0l-441.6 432c-9.6 9.6-9.6 25.6 0 35.2 9.6 9.6 25.6 9.6 35.2 0l425.6-416 416 416c9.6 9.6 25.6 9.6 35.2 0S976 678.4 966.4 668.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kefu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M639.761119 675.262569H347.840707c-10.025668 0-18.110885 8.158718-18.110884 18.140285v36.295271c0 10.025668 8.099917 18.140285 18.110884 18.140286H639.761119c10.010968 0 18.110885-8.129318 18.110884-18.140286v-36.295271c0-9.996267-8.099917-18.140285-18.110884-18.140285z" fill="#898988" ></path>' +
    '' +
    '<path d="M220.329496 433.485199a82.042895 80.837463 0 1 0 164.08579 0 82.042895 80.837463 0 1 0-164.08579 0Z" fill="#898988" ></path>' +
    '' +
    '<path d="M949.954119 312.44216h-37.147894c-1.661144 0-3.189985 0.36751-4.777628 0.485113C837.040397 142.358609 669.426512 22.197594 473.205662 22.197594 212.714692 22.197594 1.543541 233.398145 1.543541 493.859715c0 210.833041 138.65411 388.575497 329.553418 448.891211a72.472939 72.472939 0 0 0 71.194005 59.06618h183.034598a72.619943 72.619943 0 0 0 72.575842-72.590542v-36.26587a72.590542 72.590542 0 0 0-72.575842-72.561142H402.276264c-31.135433 0-57.522639 19.742628-67.798214 47.335267-151.943266-56.405409-260.358667-202.277413-260.358667-373.875104 0-220.388297 178.668581-399.115679 399.086279-399.11568 171.480088 0 317.29329 108.297798 373.7134 260.12346a72.13483 72.13483 0 0 0-6.71808 30.135807v217.698125a72.561142 72.561142 0 0 0 72.590542 72.575842h37.118494a72.561142 72.561142 0 0 0 72.561141-72.575842v-217.712826a72.51704 72.51704 0 0 0-72.51704-72.546441z" fill="#898988" ></path>' +
    '' +
    '<path d="M685.214735 352.647736c-45.291912 0-82.072296 36.177668-82.072296 80.837463s36.795085 80.852163 82.072296 80.852164c45.336013 0 82.042895-36.192368 82.042895-80.852164s-36.692182-80.837463-82.042895-80.837463z" fill="#898988" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-e60213" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M946.293441 970.832328c0-129.294958-55.886216-249.05991-154.096134-331.861725l0.909202 0-17.668522-13.46082c-5.254845-4.001294-11.510517-6.117731-18.0904-6.117731-9.371929 0-18.000789 4.271135-23.665429 11.70887-9.980077 13.055052-7.474989 31.797903 5.584091 41.784021 93.692101 71.593359 147.427647 180.190129 147.427647 297.946378 0 0.002014 0 0.004027 0 0.006041L137.305098 970.837362c0-206.61639 168.089588-374.710005 374.697923-374.710005 159.821187 0 289.845117-130.021917 289.845117-289.840083 0-159.818166-130.024938-289.839076-289.845117-289.839076-159.814138 0-289.833035 130.02091-289.833035 289.839076 0 55.913401 16.069615 110.207759 46.469985 157.012024 26.200723 40.338158 61.820697 73.437941 103.734604 96.568723-81.164648 27.727135-153.839383 80.006749-206.125038 148.635888-57.926131 76.033647-88.543984 166.746426-88.543984 262.333452l0 53.161631 868.586882 0 0-53.161631 0 0C946.293441 970.836355 946.293441 970.834342 946.293441 970.832328zM281.768525 306.288281c0-126.954997 103.28252-230.240537 230.234496-230.240537 126.958017 0 230.246578 103.285541 230.246578 230.240537 0 126.952983-103.288561 230.235503-230.246578 230.235503C385.051044 536.523784 281.768525 433.240257 281.768525 306.288281z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)