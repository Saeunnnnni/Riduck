import React, { useEffect, useState } from "react";
import styles from "./css/index.module.css";
import Animals from "./components/Animals/index";
const Landing = (props) => {
  /* 스크롤 이벤트를 위한 구문  */
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    /* 스크롤 이벤트를 위한 구문  */
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
        <div className={styles.gnb}>
              <div className={styles.topBox}>
                <div className={styles.topLogo}>
                  <a href="#!">
                    <img
                      src={require("./components/common/riduck_toplogo.png")}
                      alt="riduck_toplogo"
                    />
                  </a>
                </div>
              </div>
            </div>
          <div className={styles.mainSection}>
          
            <div className={styles.mainBackGround}>
              <div className={styles.sky}>
                <div className={styles.leftCloud}>
                  <p className={styles.leftCloud1}>
                    <img
                      src={require("./components/common/cloud1.png")}
                      alt="cloud1"
                    />
                  </p>
                  <p className={styles.leftCloud2}>
                    <img
                      src={require("./components/common/cloud2.png")}
                      alt="cloud2"
                    />
                  </p>
                  <p className={styles.leftCloud3}>
                    <img
                      src={require("./components/common/cloud3.png")}
                      alt="cloud3"
                    />
                  </p>
                </div>
                <div className={styles.rightCloud}>
                  <p className={styles.rightSun}>
                    <img
                      src={require("./components/common/sun1.png")}
                      alt="sun"
                    />
                  </p>
                  <p className={styles.rightCloud1}>
                    <img
                      src={require("./components/common/cloud_r1.png")}
                      alt={styles.cloudRight1}
                    />
                  </p>
                  <p className={styles.rightCloud2}>
                    <img
                      src={require("./components/common/cloud_r2.png")}
                      alt="cloudRight2"
                    />
                  </p>
                  <p className={styles.rightCloud3}>
                    <img
                      src={require("./components/common/cloud_r3.png")}
                      alt="cloudRight3"
                    />
                  </p>
                  <p className={styles.rightCloud4}>
                    <img
                      src={require("./components/common/cloud_r4.png")}
                      alt="cloudRight4"
                    />
                  </p>
                </div>
              </div>
              <div className={styles.land}>
                <div className={styles.leftLand}>
                  <p className={styles.leftLand1}>
                    <img
                      src={require("./components/common/land_left1.png")}
                      alt="landLeft1"
                    />
                  </p>
                  <p
                    className={styles.leftLand2}
                    style={{ transform: `translateY(${position}px)` }}
                  >
                    <img
                      src={require("./components/common/land_left2.png")}
                      alt="landLeft2"
                    />
                  </p>
                  <p className={styles.leftTree1}>
                    <img
                      src={require("./components/common/land_left_tree1.png")}
                      alt="landTree1"
                    />
                  </p>
                  <p className={styles.leftTree2}>
                    <img
                      src={require("./components/common/land_left_tree2.png")}
                      alt="landTree2"
                    />
                  </p>
                </div>
                <div className={styles.rightLand}>
                  <p className={styles.rightLand1}>
                    <img
                      src={require("./components/common/land_right_land1.png")}
                      alt="rightLand1"
                    />
                  </p>
                  <p
                    className={styles.rightLand2}
                    style={{ transform: `translateY(${position}px)` }}
                  >
                    <img
                      src={require("./components/common/land_right_land2.png")}
                      alt="rightLand2"
                    />
                  </p>
                  <p className={styles.rightTree1}>
                    <img
                      src={require("./components/common/land_right_tree1.png")}
                      alt="rightTree1"
                    />
                  </p>
                  <p className={styles.rightTree2}>
                    <img
                      src={require("./components/common/land_right_tree2.png")}
                      alt="rightTree2"
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.mainInner}>
              <p className={styles.mainSectionTitle}>
                세상에서 제일 쉽고 정확한 사이클링 훈련 도구
              </p>

              <div className={styles.mainImg}>
                <div className={styles.phoneImg}>
                  <img
                    src={require("./components/common/landing1.png")}
                    alt=""
                  />
                </div>
                <div className={styles.tabletImg}>
                  <img
                    src={require("./components/common/landing2.png")}
                    alt=""
                  />
                </div>
              </div>
              <p>
                <a href="https://riduck.com/sign-in">
                  {" "}
                  <button type="button" className={styles.loginBtn}>
                    로그인
                  </button>
                </a>
              </p>
            
            <Animals />
            </div>
            </div>

          <div className={styles.section1}>
            <div className={styles.section1Inner}>
              <p className={styles.sectionTitle}>
                가장 정확한 사이클링 통계와 데이터 분석
              </p>
              <p className={styles.subTitle}>
                나에게 가장 최적화된 훈련과 라이딩을 계획합니다
              </p>
              <div className={styles.contentImg}>
                <ul className={styles.contentImg1}>
                  <li>
                    <img
                      src={require("./components/common/world_rank.png")}
                      alt="world_rank"
                    />
                  </li>
                  <li className={styles.contents}>
                    전세계 60만명 통계의 나의 예상 순위
                  </li>
                </ul>
                <ul className={styles.contentImg2}>
                  <li>
                    <img
                      src={require("./components/common/ftp_7zone.png")}
                      alt="ftp_7zone"
                    />
                  </li>
                  <li className={styles.contents}>
                    Zone 트레이닝을 위한 최적의 FTP
                  </li>
                </ul>
                <ul className={styles.contentImg3}>
                  <li>
                    <img
                      src={require("./components/common/week_guide.png")}
                      alt="week_guide"
                    />
                  </li>
                  <li className={styles.contents}>
                    개인의 최적화된 주간 훈련량 가이드
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.section2}>
            <div className={styles.section2Inner}>
              <p className={styles.sectionTitle}>
                누구나 쉽게 이해 가능한 훈련 콘텐츠
              </p>

              <p className={styles.subTitle}>
                동물들의 사냥과 생존방법을 통해 이해하는 사이클링 트레이닝
              </p>

              <div className={styles.imgBox}>
                <div className={styles.img1}>
                  <img
                    src={require("./components/common/animal_list1.png")}
                    alt="animal_list1"
                  />
                </div>
                <div className={styles.img2}>
                  <img
                    src={require("./components/common/animal_list2.png")}
                    alt="animal_list2"
                  />
                </div>
                <div className={styles.img3}>
                  <img
                    src={require("./components/common/animal_tr.png")}
                    alt="animal_tr"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section3}>
            <div className={styles.section3Inner}>
              <p className={styles.sectionTitle}>
                강력한 소셜네트워크 연동과 통합기능
              </p>

              <p className={styles.subTitle}>
                라이딩이 끝나면 실시간으로 SNS에 훈련 내용을 공유합니다
              </p>

              <div className={styles.pcStravaDesc}>
                <img
                  src={require("./components/common/pc_stravascreen.png")}
                  alt="pc_stravascreen"
                />
              </div>
              <div className={styles.phoneStravaDesc}>
                <img src={require("./components/common/strava_phone.png")} />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerInner}>
              <div className={styles.footerMenu}>
                <ul className={styles.footerMenuList}>
                  <li>
                    <a href="#" className={styles.footerMenuTitle}>
                      {" "}
                      라이덕
                    </a>

                    <div className={styles.footerSubMenu}>
                      <ul>
                        <li>
                          {" "}
                          <a href="">라이덕 문화</a>
                        </li>
                        <li>
                          {" "}
                          <a href="">공동체</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className={styles.footerMenuTitle}>
                      뉴스
                    </a>
                    <div className={styles.footerSubMenu}>
                      <ul>
                        <li>
                          <a href="">공지사항</a>
                        </li>
                        <li>
                          <a href="">라이덕 인재영입</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className={styles.footerMenuTitle}>
                      기술과 서비스
                    </a>
                    <div className={styles.footerSubMenu}>
                      <ul>
                        <li>
                          {" "}
                          <a href="">기술</a>
                        </li>
                        <li>
                          {" "}
                          <a href="">서비스</a>
                        </li>
                        <li>
                          <a href="">인재영입</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className={styles.footerMenuTitle}>
                      고객센터
                    </a>
                    <div className={styles.footerSubMenu}>
                      <ul>
                        <li>
                          {" "}
                          <a href="">라이덕 고객센터</a>
                        </li>
                        <li>
                          <a href="">라이덕 계정</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.bottomSection2}>
                <div className={styles.footerIcon}>
                  <p>
                    <a href="https://www.strava.com/clubs/959584" />
                    <img
                      src={require("./components/common/strava_white.png")}
                      alt="strava_img"
                    />
                  </p>
                </div>

                <div className={styles.companyInfo}>
                  <p>
                    (주)라이덕|서울시 서대문구 통일로 484
                    203호(홍제동,공유캠퍼스)
                  </p>
                  <p>
                    사업자 등록번호:000-00-00000 <a href="#">사업자 정보확인</a>
                  </p>
                  <p>TEL : 0000-0000</p>

                  <p>
                    <a href="https://strava.com" target="_blank">
                      Riduck.All Rights Reserved.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
