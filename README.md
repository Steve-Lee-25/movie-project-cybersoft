**API**</br>  CHÂN THÀNH CẢM ƠN HAI ĐƠN VỊ SAU ĐÃ HỖ TRỢ TRONG QUÁ TRÌNH THỰC HIỆN DỰ ÁN ĐẦU TAY. KÍNH CHÚC **CYBERSOFT** NGÀY CÀNG HỒNG PHÁT, PHÁT TRIỂN VƯỢT BẬC. </br>
    + Dự án được xây dựng nên từ hai nguồn api data: </br>
      1.**CyberSoft API** : được cung cấp bởi trung tâm đào tạo lập trình **Cybersoft**. </br>
          - HyperLink : https://cybersoft.edu.vn/ </br>
          - Link API  : https://movienew.cybersoft.edu.vn/swagger/index.html  </br>
                  (&) : API được lấy từ cybersoft được dùng để hỗ trợ trong quá trình xây dựng giao diện và hiện thực các chức năng của các trang Home, Detail, Booking, Sign In         Sign Up.  </br>
      2. **TMDB** : được cung cấp bởi **The movie Database**. </br>
          - Hyperlink : https://www.themoviedb.org/?language=vi </br>
          - Link API  : https://api.themoviedb.org/3/movie/550?api_key=a88582247bc48f7806d3127898290c45 </br>
                  (&) : API được sử dụng để hỗ trợ trong việc lấy hình ảnh và những thông tin về những bộ phim được cập nhật mới nhất trên toàn cầu, nhằm mục đích hoàn thiện hơn dự án cá nhân. </br>

**DESIGN IDEA** : màu sắc và cảm hứng tạo giao diện được lấy cảm hứng từ một trang dịch vụ xem phim của nước ngoài. </br>
-HyperLink : https://www.netflix.com/vn-en/

**Switch Pages** </br>
****DETAIL PAGES : ở danh sách chi tiết phim phim ở trang Home, có BUTTON [Detail] click vào chuyển sang trang Detail. </br>
****BOOKING PAGES : Nhấn vào giờ chiếu phim ở ở trang Home danh sách phim, bất cứ giờ nào sẽ nhận data tương ứng. </br>
****AUTHENCATION : nhấn chọn signIn hoặc SignUp sẽ tự chuyển sang trang đăng nhập hoặc đăng kí tương ứng. </br>
****PAGENOTFOUND : nhập một đường địa chỉ bất kì ngẫu nhiên --> VD : "camOnCyberSoftDaGiupToi". </br>
****NEWS PAGES : nhập một đường địa chỉ **/news** hoặc chúng ta có thể nhấn vào nút button NEWS ở HOME PAGES --> VD : "camOnCyberSoftDaGiupToi". </br>

**HOME PAGE** </br>
****Banner      : được thiết lập ở chế độ autoPlay, nếu muốn chuyển slide chủ động ta thực hiện chọn nút mũi tên bên trái hoặc bên phải tùy ý muốn, ấn chọn.  </br>
****Tab Status  : chúng ta có có hai **BUTTON**, trong đó NOW và COMMING SOON là phim đang chiếu và sắp chiếu hiện tại của rạp phim. Và NEWS là tab để chuyển sang tin tức.  </br>
****Pre-details : ở vùng này có mục đích giúp người dùng xem trước nội dung của họ, trước khi chuyển sang trang Detail. Khi ấn **PLAY** phim sẽ được chạy. **LIST-MOVIE** bên dưới khi được nhấn ở một item Movie nào,  nội dung, background và tên phim sẽ được thay đổi theo.  </br>
****Pre-Booking : ở vùng này chúng ta sẽ được phép xem danh sách các rạp phim và những bộ phim được chiếu tương ứng. Khi ấn vào **DETAIL BUTTON** chúng ta sẽ được chuyển đổi sang trang chi tiết và thông tin bộ phim chúng ta click tương ứng. Khi ấn vào **TIMES CINEMA** giờ chiếu phim chúng ta sẽ được chuyển sang trang **BOOKINGS**, với thông tin tương ứng. </br>


**DETAIL PAGE** </br>
****Info Movie : vùng này sẽ chứa tất cả thông tin của phim mà chúng ta đã nhấn vào nút chi tiết ở HOME PAGE. ở Vùng này chúng ta có hai nút **BUTTON**. Khi ấn vào **TRAILER** thì vùng này sẽ hiện ra, bộ phim mà chúng ta mong muốn. **NEWS** chúng ta sẽ được chuyển sang NEWS PAGE. </br>
****BOOKING AREA : ở đây chúng ta sẽ hiện ra danh sách các rạp phim và lịch phim của bộ phim chúng ta đang xem xét. Ấn vào **TIME-MOVIES** chúng ta sẽ được chuyển trang BOOKING PAGES. </br>

**NEWS PAGE** : đây là trang được xây dựng nên nhằm mục đích clone trang thông tin của NETFLIX. Sử dụng nguồn dữ liệu tĩnh được thu nhập từ chính NETFLIX.

**AUTHENCATIONS PAGES** : SIGN IN / SIGN UP những trang web được tạo ra nhằm mục đích đăng nhập thực hiện chúng năng BOOKING TICKET, gửi lên admin.

**BOOKING PAGES** : đây là trang web được tạo ra nhằm mục đích là đặt vé xem những bộ phim tương ứng.




