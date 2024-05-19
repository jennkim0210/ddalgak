import logo from "./logo.svg";
import "./App.css";
// 자바스크립트 문법 -> 컴포넌트 개념 -> probs, ustate, useffect -> axios ;

// react 프로젝트에서 css 적용 시키기 -> react 구조, public이 뭔지  statatic이 뭔지, src 뭔지, component 뭔지
function App() {
  const a = 1;

  const click_evnet = () => {
    console.log("@@@");
  };
  return (
    <div class="container-center-horizontal">
      <div class="frame-5 screen">
        <div class="x2">
          <div class="monsters-container">
            <img class="monsters" src="img/monsters.svg" alt="Monsters" />
            <div class="monsters-1">
              <div class="overlap-group3">
                <img class="union" src="img/union-1.svg" alt="Union" />
                <div class="group-22">
                  <div class="vector-container">
                    <img
                      class="vector-12"
                      src="img/vector-6@2x.png"
                      alt="Vector 12"
                    />
                    <img
                      class="vector-13"
                      src="img/vector-6@2x.png"
                      alt="Vector 13"
                    />
                  </div>
                  <div class="flex-row-3">
                    <div class="vector-container-1">
                      <img
                        class="vector-6-1"
                        src="img/vector-6@2x.png"
                        alt="Vector 6"
                      />
                      <img
                        class="vector-5-1"
                        src="img/vector-6@2x.png"
                        alt="Vector 5"
                      />
                    </div>
                    <img
                      class="vector-7-1"
                      src="img/vector-6@2x.png"
                      alt="Vector 7"
                    />
                    <img
                      class="vector-14-1"
                      src="img/vector-6@2x.png"
                      alt="Vector 14"
                    />
                  </div>
                  <div class="overlap-group">
                    <img
                      class="vector-1-1"
                      src="img/vector-1.svg"
                      alt="Vector 1"
                    />
                    <div class="ellipse-1"></div>
                    <div class="ellipse-2"></div>
                    <img
                      class="vector-2-1"
                      src="img/vector-2.svg"
                      alt="Vector 2"
                    />
                    <img
                      class="group-7"
                      src="img/group-7@2x.png"
                      alt="Group 7"
                    />
                    <div class="group-2-1">
                      <div class="flex-row-4">
                        <div class="ellipse-container-5">
                          <div class="ellipse-3-4"></div>
                          <div class="ellipse-4-5"></div>
                        </div>
                        <div class="ellipse-6-3"></div>
                        <div class="ellipse-8-3"></div>
                        <div class="ellipse-5-3"></div>
                      </div>
                      <div class="ellipse-10-2"></div>
                      <div class="ellipse-7-3"></div>
                      <div class="ellipse-9-2"></div>
                    </div>
                    <div class="rectangle-2"></div>
                    <div class="rectangle-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-56">
            <div class="group-container-3">
              <div class="group-2">
                <div class="overlap-group1">
                  <img
                    class="vector-4-1 vector-4-3"
                    src="img/vector-4.svg"
                    alt="Vector 4"
                  />
                  <img
                    class="group-2-2"
                    src="img/group-2@2x.png"
                    alt="Group 2"
                  />
                  <img
                    class="vector-3-1 vector-3-3"
                    src="img/vector-3.svg"
                    alt="Vector 3"
                  />
                  <img
                    class="group-1-2"
                    src="img/group-1@2x.png"
                    alt="Group 1"
                  />
                  <img
                    class="vector-5-2"
                    src="img/vector-5-1.svg"
                    alt="Vector 5"
                  />
                  <img
                    class="vector-7-2"
                    src="img/vector-7-1.svg"
                    alt="Vector 7"
                  />
                  <div class="ellipse-13"></div>
                  <div class="group-container-4">
                    <div class="group-3">
                      <div class="flex-row">
                        <div class="ellipse-container">
                          <div class="ellipse-3"></div>
                          <div class="ellipse-4"></div>
                        </div>
                        <div class="ellipse-6"></div>
                        <div class="ellipse-8"></div>
                        <div class="ellipse-5"></div>
                      </div>
                      <div class="ellipse-10"></div>
                      <div class="ellipse-7"></div>
                      <div class="ellipse-9"></div>
                    </div>
                    <div class="group-4">
                      <div class="flex-row">
                        <div class="ellipse-container">
                          <div class="ellipse-3"></div>
                          <div class="ellipse-4"></div>
                        </div>
                        <div class="ellipse-6-1"></div>
                        <div class="ellipse-8-1"></div>
                        <div class="ellipse-5-1"></div>
                      </div>
                      <div class="ellipse-10"></div>
                      <div class="ellipse-7-1"></div>
                      <div class="ellipse-9"></div>
                    </div>
                    <div class="group-5">
                      <div class="flex-row-1">
                        <div class="ellipse-container-1">
                          <div class="ellipse-3-1"></div>
                          <div class="ellipse-4-1"></div>
                        </div>
                        <div class="ellipse-6-2"></div>
                        <div class="ellipse-8-2"></div>
                        <div class="ellipse-5-2"></div>
                      </div>
                      <div class="ellipse-10-1"></div>
                      <div class="ellipse-7-2"></div>
                      <div class="ellipse-9-1"></div>
                    </div>
                  </div>
                  <div class="ellipse-1-1 ellipse-1-3"></div>
                  <div class="ellipse-2-1 ellipse-2-3"></div>
                  <div class="rectangle-2-1 rectangle-2-3"></div>
                  <div class="rectangle-3-1 rectangle-3-3"></div>
                  <img
                    class="vector-16"
                    src="img/vector-16.svg"
                    alt="Vector 16"
                  />
                  <img
                    class="vector-17"
                    src="img/vector-17.svg"
                    alt="Vector 17"
                  />
                  <img
                    class="vector-18"
                    src="img/vector-18.svg"
                    alt="Vector 18"
                  />
                  <img
                    class="rectangle-5"
                    src="img/rectangle-5.svg"
                    alt="Rectangle 5"
                  />
                  <img
                    class="vector-21"
                    src="img/vector-21.svg"
                    alt="Vector 21"
                  />
                  <img
                    class="vector-22"
                    src="img/vector-22.svg"
                    alt="Vector 22"
                  />
                  <img
                    class="mask-group"
                    src="img/mask-group@2x.png"
                    alt="Mask group"
                  />
                </div>
                <img
                  class="vector-6-2"
                  src="img/vector-6@2x.png"
                  alt="Vector 6"
                />
                <img
                  class="vector-14"
                  src="img/vector-6@2x.png"
                  alt="Vector 14"
                />
              </div>
              <div class="group-2">
                <div class="overlap-group2">
                  <img
                    class="vector-4-2 vector-4-3"
                    src="img/vector-4-1.svg"
                    alt="Vector 4"
                  />
                  <img
                    class="group-2-3"
                    src="img/group-2-1@2x.png"
                    alt="Group 2"
                  />
                  <img
                    class="vector-3-2 vector-3-3"
                    src="img/vector-3-1.svg"
                    alt="Vector 3"
                  />
                  <img
                    class="group-1-3"
                    src="img/group-1-1@2x.png"
                    alt="Group 1"
                  />
                  <img
                    class="vector-5-3"
                    src="img/vector-5-2.svg"
                    alt="Vector 5"
                  />
                  <img
                    class="vector-7-3"
                    src="img/vector-7-2.svg"
                    alt="Vector 7"
                  />
                  <div class="ellipse-13-1"></div>
                  <div class="group-container-5">
                    <div class="group-3">
                      <div class="flex-row">
                        <div class="ellipse-container">
                          <div class="ellipse-3"></div>
                          <div class="ellipse-4"></div>
                        </div>
                        <div class="ellipse-6"></div>
                        <div class="ellipse-8"></div>
                        <div class="ellipse-5"></div>
                      </div>
                      <div class="ellipse-10"></div>
                      <div class="ellipse-7"></div>
                      <div class="ellipse-9"></div>
                    </div>
                    <div class="group-4">
                      <div class="flex-row">
                        <div class="ellipse-container">
                          <div class="ellipse-3"></div>
                          <div class="ellipse-4"></div>
                        </div>
                        <div class="ellipse-6-1"></div>
                        <div class="ellipse-8-1"></div>
                        <div class="ellipse-5-1"></div>
                      </div>
                      <div class="ellipse-10"></div>
                      <div class="ellipse-7-1"></div>
                      <div class="ellipse-9"></div>
                    </div>
                    <div class="group-5">
                      <div class="flex-row-1">
                        <div class="ellipse-container-1">
                          <div class="ellipse-3-1"></div>
                          <div class="ellipse-4-1"></div>
                        </div>
                        <div class="ellipse-6-2"></div>
                        <div class="ellipse-8-2"></div>
                        <div class="ellipse-5-2"></div>
                      </div>
                      <div class="ellipse-10-1"></div>
                      <div class="ellipse-7-2"></div>
                      <div class="ellipse-9-1"></div>
                    </div>
                  </div>
                  <div class="ellipse-1-2 ellipse-1-3"></div>
                  <div class="ellipse-2-2 ellipse-2-3"></div>
                  <div class="rectangle-2-2 rectangle-2-3"></div>
                  <div class="rectangle-3-2 rectangle-3-3"></div>
                  <img
                    class="vector-16-1"
                    src="img/vector-16-1.svg"
                    alt="Vector 16"
                  />
                  <img
                    class="vector-17-1"
                    src="img/vector-17-1.svg"
                    alt="Vector 17"
                  />
                  <img
                    class="vector-18-1"
                    src="img/vector-18-1.svg"
                    alt="Vector 18"
                  />
                  <img
                    class="rectangle-5-1"
                    src="img/rectangle-5.svg"
                    alt="Rectangle 5"
                  />
                  <img
                    class="vector-21-1"
                    src="img/vector-21.svg"
                    alt="Vector 21"
                  />
                  <img
                    class="vector-22-1"
                    src="img/vector-22.svg"
                    alt="Vector 22"
                  />
                  <img
                    class="mask-group-1"
                    src="img/mask-group@2x.png"
                    alt="Mask group"
                  />
                </div>
                <img
                  class="vector-6-3"
                  src="img/vector-6@2x.png"
                  alt="Vector 6"
                />
                <img
                  class="vector-14"
                  src="img/vector-6@2x.png"
                  alt="Vector 14"
                />
              </div>
            </div>
          </div>
          <div class="overlap-group9">
            <div class="overlap-group-container">
              <div class="overlap-group4">
                <img
                  class="vector-63"
                  src="img/vector-63.svg"
                  alt="Vector 63"
                />
                <img
                  class="vector-57"
                  src="img/vector-57.svg"
                  alt="Vector 57"
                />
                <img
                  class="vector-13-1"
                  src="img/vector-13-1.svg"
                  alt="Vector 13"
                />
                <div class="ellipse-16"></div>
                <div class="group-6">
                  <div class="group-container">
                    <div class="group-3-1 group-3-7">
                      <div class="ellipse-container-2">
                        <div class="ellipse-3-2"></div>
                        <div class="ellipse-5-4"></div>
                        <div class="ellipse-4-2"></div>
                        <div class="ellipse-6-4"></div>
                        <div class="ellipse-7-4"></div>
                        <div class="ellipse-8-4"></div>
                        <div class="ellipse-9-3"></div>
                        <div class="ellipse-10-3"></div>
                      </div>
                    </div>
                    <div class="group-4-1 group-4-7">
                      <div class="ellipse-container-2">
                        <div class="ellipse-3-2"></div>
                        <div class="ellipse-5-5"></div>
                        <div class="ellipse-4-2"></div>
                        <div class="ellipse-6-5"></div>
                        <div class="ellipse-7-5"></div>
                        <div class="ellipse-8-5"></div>
                        <div class="ellipse-9-4"></div>
                        <div class="ellipse-10-4"></div>
                      </div>
                    </div>
                    <div class="group-5-1 group-5-7">
                      <div class="ellipse-container-6">
                        <div class="ellipse-3-5"></div>
                        <div class="ellipse-5-6"></div>
                        <div class="ellipse-4-6"></div>
                        <div class="ellipse-6-6"></div>
                        <div class="ellipse-7-6"></div>
                        <div class="ellipse-8-6"></div>
                        <div class="ellipse-9-5"></div>
                        <div class="ellipse-10-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ellipse-13-2"></div>
                <div class="ellipse-21"></div>
                <div class="ellipse-14"></div>
                <div class="rectangle-7"></div>
                <div class="rectangle-9"></div>
                <div class="rectangle-8"></div>
                <img
                  class="vector-51"
                  src="img/vector-51.svg"
                  alt="Vector 51"
                />
                <img
                  class="vector-52"
                  src="img/vector-52.svg"
                  alt="Vector 52"
                />
                <img
                  class="vector-53"
                  src="img/vector-53.svg"
                  alt="Vector 53"
                />
                <img
                  class="vector-54"
                  src="img/vector-54.svg"
                  alt="Vector 54"
                />
                <img
                  class="vector-25"
                  src="img/vector-25.svg"
                  alt="Vector 25"
                />
                <img
                  class="vector-58"
                  src="img/vector-58.svg"
                  alt="Vector 58"
                />
                <img
                  class="vector-59"
                  src="img/vector-59.svg"
                  alt="Vector 59"
                />
                <img
                  class="vector-60"
                  src="img/vector-60.svg"
                  alt="Vector 60"
                />
                <img
                  class="vector-62"
                  src="img/vector-62.svg"
                  alt="Vector 62"
                />
                <img
                  class="vector-61"
                  src="img/vector-61.svg"
                  alt="Vector 61"
                />
                <div class="ellipse-17"></div>
                <div class="ellipse-18"></div>
                <div class="ellipse-19"></div>
                <img
                  class="ellipse-20"
                  src="img/ellipse-20.svg"
                  alt="Ellipse 20"
                />
              </div>
              <div class="overlap-group5">
                <img
                  class="vector-63-1"
                  src="img/vector-63-1.svg"
                  alt="Vector 63"
                />
                <img
                  class="vector-57-1"
                  src="img/vector-57-1.svg"
                  alt="Vector 57"
                />
                <img
                  class="vector-13-2"
                  src="img/vector-13-2.svg"
                  alt="Vector 13"
                />
                <div class="ellipse-16-1"></div>
                <div class="group-6-1 group-6-6">
                  <div class="group-container">
                    <div class="group-3-2 group-3-7">
                      <div class="flex-row-2">
                        <div class="ellipse-container-3">
                          <div class="ellipse-3-3"></div>
                          <div class="ellipse-4-3"></div>
                        </div>
                        <div class="ellipse-6-7"></div>
                        <div class="ellipse-8-7"></div>
                        <div class="ellipse-5-7"></div>
                      </div>
                      <div class="ellipse-10-6"></div>
                      <div class="ellipse-7-7"></div>
                      <div class="ellipse-9-6"></div>
                    </div>
                    <div class="group-4-2 group-4-7">
                      <div class="flex-row-2">
                        <div class="ellipse-container-3">
                          <div class="ellipse-3-3"></div>
                          <div class="ellipse-4-3"></div>
                        </div>
                        <div class="ellipse-6-8"></div>
                        <div class="ellipse-8-8"></div>
                        <div class="ellipse-5-8"></div>
                      </div>
                      <div class="ellipse-10-7"></div>
                      <div class="ellipse-7-8"></div>
                      <div class="ellipse-9-7"></div>
                    </div>
                    <div class="group-5-2 group-5-7">
                      <div class="flex-row-5">
                        <div class="ellipse-container-7">
                          <div class="ellipse-3-6"></div>
                          <div class="ellipse-4-7"></div>
                        </div>
                        <div class="ellipse-6-9"></div>
                        <div class="ellipse-8-9"></div>
                        <div class="ellipse-5-9"></div>
                      </div>
                      <div class="ellipse-10-8"></div>
                      <div class="ellipse-7-9"></div>
                      <div class="ellipse-9-8"></div>
                    </div>
                  </div>
                </div>
                <div class="ellipse-13-3"></div>
                <div class="ellipse-21-1"></div>
                <div class="ellipse-14-1 ellipse-14-6"></div>
                <div class="rectangle-7-1 rectangle-7-6"></div>
                <div class="rectangle-9-1 rectangle-9-4"></div>
                <div class="rectangle-8-1 rectangle-8-6"></div>
                <img
                  class="vector-51-1"
                  src="img/vector-51-1.svg"
                  alt="Vector 51"
                />
                <img
                  class="vector-52-1"
                  src="img/vector-52-1.svg"
                  alt="Vector 52"
                />
                <img
                  class="vector-53-1"
                  src="img/vector-53-1.svg"
                  alt="Vector 53"
                />
                <img
                  class="vector-54-1"
                  src="img/vector-54-1.svg"
                  alt="Vector 54"
                />
                <img
                  class="vector-25-1"
                  src="img/vector-25-1.svg"
                  alt="Vector 25"
                />
                <img
                  class="vector-58-1"
                  src="img/vector-58-1.svg"
                  alt="Vector 58"
                />
                <img
                  class="vector-59-1"
                  src="img/vector-59-1.svg"
                  alt="Vector 59"
                />
                <img
                  class="vector-60-1"
                  src="img/vector-60-1.svg"
                  alt="Vector 60"
                />
                <img
                  class="vector-62-1"
                  src="img/vector-62-1.svg"
                  alt="Vector 62"
                />
                <img
                  class="vector-61-1"
                  src="img/vector-61-1.svg"
                  alt="Vector 61"
                />
                <div class="ellipse-17-1"></div>
                <div class="ellipse-18-1"></div>
                <div class="ellipse-19-1"></div>
                <img
                  class="ellipse-20-1"
                  src="img/ellipse-20-1.svg"
                  alt="Ellipse 20"
                />
              </div>
            </div>
            <div class="group-49">
              <div class="overlap-group-container-1">
                <div class="overlap-group4-1">
                  <img
                    class="vector-6-4"
                    src="img/vector-6-3.svg"
                    alt="Vector 6"
                  />
                  <img
                    class="vector-5-4"
                    src="img/vector-5-3.svg"
                    alt="Vector 5"
                  />
                  <img
                    class="vector-26"
                    src="img/vector-26.svg"
                    alt="Vector 26"
                  />
                  <img
                    class="vector-27"
                    src="img/vector-27.svg"
                    alt="Vector 27"
                  />
                  <img
                    class="union-1 union-3"
                    src="img/union-2.svg"
                    alt="Union"
                  />
                  <div class="group-6-2 group-6-6">
                    <div class="group-container-1">
                      <div class="group-3-3 group-3-7">
                        <div class="ellipse-container-8">
                          <div class="ellipse-3-7"></div>
                          <div class="ellipse-5-10"></div>
                          <div class="ellipse-4-4"></div>
                          <div class="ellipse-6-10"></div>
                          <div class="ellipse-7-10"></div>
                          <div class="ellipse-8-10"></div>
                          <div class="ellipse-9-9"></div>
                          <div class="ellipse-10-9"></div>
                        </div>
                      </div>
                      <div class="group-4-3 group-4-7">
                        <div class="ellipse-container-9">
                          <div class="ellipse-3-8"></div>
                          <div class="ellipse-5-11"></div>
                          <div class="ellipse-4-4"></div>
                          <div class="ellipse-6-11"></div>
                          <div class="ellipse-7-11"></div>
                          <div class="ellipse-8-11"></div>
                          <div class="ellipse-9-10"></div>
                          <div class="ellipse-10-10"></div>
                        </div>
                      </div>
                      <div class="group-5-3 group-5-7">
                        <div class="ellipse-container-10">
                          <div class="ellipse-3-9"></div>
                          <div class="ellipse-5-12"></div>
                          <div class="ellipse-4-8"></div>
                          <div class="ellipse-6-12"></div>
                          <div class="ellipse-7-12"></div>
                          <div class="ellipse-8-12"></div>
                          <div class="ellipse-9-11"></div>
                          <div class="ellipse-10-11"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="group-9"
                    src="img/group-9-1@2x.png"
                    alt="Group 9"
                  />
                  <div class="ellipse-13-4"></div>
                  <div class="ellipse-15"></div>
                  <div class="ellipse-14-2 ellipse-14-6"></div>
                  <div class="rectangle-7-2 rectangle-7-6"></div>
                  <div class="rectangle-9-2 rectangle-9-4"></div>
                  <div class="rectangle-8-2 rectangle-8-6"></div>
                  <img
                    class="vector-25-2"
                    src="img/vector-25-2.svg"
                    alt="Vector 25"
                  />
                  <img
                    class="group-1"
                    src="img/group-10-1@2x.png"
                    alt="Group 10"
                  />
                  <img
                    class="group-1"
                    src="img/group-10-1@2x.png"
                    alt="Group 11"
                  />
                </div>
                <div class="overlap-group5-1">
                  <img
                    class="vector-6-5"
                    src="img/vector-6-4.svg"
                    alt="Vector 6"
                  />
                  <img
                    class="vector-5-5"
                    src="img/vector-5-4.svg"
                    alt="Vector 5"
                  />
                  <img
                    class="vector-26-1"
                    src="img/vector-26-1.svg"
                    alt="Vector 26"
                  />
                  <img
                    class="vector-27-1"
                    src="img/vector-27-1.svg"
                    alt="Vector 27"
                  />
                  <img
                    class="union-2 union-3"
                    src="img/union.svg"
                    alt="Union"
                  />
                  <div class="group-6-3 group-6-6">
                    <div class="group-container-1">
                      <div class="group-3-4 group-3-7">
                        <div class="flex-row-6">
                          <div class="ellipse-container-4">
                            <div class="ellipse-3-10"></div>
                            <div class="ellipse-4-9"></div>
                          </div>
                          <div class="ellipse-6-13"></div>
                          <div class="ellipse-8-13"></div>
                          <div class="ellipse-5-13"></div>
                        </div>
                        <div class="ellipse-10-12"></div>
                        <div class="ellipse-7-13"></div>
                        <div class="ellipse-9-12"></div>
                      </div>
                      <div class="group-4-4 group-4-7">
                        <div class="flex-row-7">
                          <div class="ellipse-container-4">
                            <div class="ellipse-3-11"></div>
                            <div class="ellipse-4-10"></div>
                          </div>
                          <div class="ellipse-6-14"></div>
                          <div class="ellipse-8-14"></div>
                          <div class="ellipse-5-14"></div>
                        </div>
                        <div class="ellipse-10-13"></div>
                        <div class="ellipse-7-14"></div>
                        <div class="ellipse-9-13"></div>
                      </div>
                      <div class="group-5-4 group-5-7">
                        <div class="flex-row-8">
                          <div class="ellipse-container-11">
                            <div class="ellipse-3-12"></div>
                            <div class="ellipse-4-11"></div>
                          </div>
                          <div class="ellipse-6-15"></div>
                          <div class="ellipse-8-15"></div>
                          <div class="ellipse-5-15"></div>
                        </div>
                        <div class="ellipse-10-14"></div>
                        <div class="ellipse-7-15"></div>
                        <div class="ellipse-9-14"></div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="group-9-1"
                    src="img/group-9@2x.png"
                    alt="Group 9"
                  />
                  <div class="ellipse-13-5"></div>
                  <div class="ellipse-15-1"></div>
                  <div class="ellipse-14-3 ellipse-14-6"></div>
                  <div class="rectangle-7-3 rectangle-7-6"></div>
                  <div class="rectangle-9-3 rectangle-9-4"></div>
                  <div class="rectangle-8-3 rectangle-8-6"></div>
                  <img
                    class="vector-25-3"
                    src="img/vector-25-3.svg"
                    alt="Vector 25"
                  />
                  <img
                    class="group-1-1"
                    src="img/group-10@2x.png"
                    alt="Group 10"
                  />
                  <img
                    class="group-1-1"
                    src="img/group-10@2x.png"
                    alt="Group 11"
                  />
                </div>
              </div>
            </div>
            <p class="mb">
              간단한 질문에 답변해 주시면 여행mbti분석과 딱 맞는 여행지를 추천해
              드려요!
            </p>
            <h1 class="mbti-monster-guide">MBTI MONSTER GUIDE</h1>
          </div>
          <div class="flex-col">
            <button
              class="frame-4"
              a="http://127.0.0.1:5500/x2.html"
              type="button"
            >
              <div class="place">Start</div>
            </button>
            <img class="monsters-2" src="img/monsters-1.svg" alt="Monsters" />
          </div>
          <div class="group-37">
            <div class="group-container-6">
              <div class="group-36">
                <div class="overlap-group6">
                  <img
                    class="group-18"
                    src="img/group-18-1@2x.png"
                    alt="Group 18"
                  />
                  <img class="vector" src="img/vector-47.svg" alt="Vector 47" />
                  <img
                    class="vector-1"
                    src="img/vector-46.svg"
                    alt="Vector 46"
                  />
                  <img
                    class="rectangle-17"
                    src="img/rectangle-17.svg"
                    alt="Rectangle 17"
                  />
                  <div class="group-6-4 group-6-6">
                    <div class="group-container-2">
                      <div class="group-3-5 group-3-7">
                        <div class="overlap-group1-1">
                          <div class="ellipse-3-13"></div>
                          <div class="ellipse-container-12">
                            <div class="ellipse-5-16"></div>
                            <div class="ellipse-4-12"></div>
                            <div class="ellipse-6-16"></div>
                            <div class="ellipse-7-16"></div>
                            <div class="ellipse-8-16"></div>
                            <div class="ellipse-9-15"></div>
                            <div class="ellipse-10-15"></div>
                          </div>
                        </div>
                      </div>
                      <div class="group-4-5 group-4-7">
                        <div class="overlap-group3-1">
                          <div class="ellipse-3-14"></div>
                          <div class="ellipse-container-13">
                            <div class="ellipse-5-17"></div>
                            <div class="ellipse-4-13"></div>
                            <div class="ellipse-6-17"></div>
                            <div class="ellipse-7-17"></div>
                            <div class="ellipse-8-17"></div>
                            <div class="ellipse-9-16"></div>
                            <div class="ellipse-10-16"></div>
                          </div>
                        </div>
                      </div>
                      <div class="group-5-5 group-5-7">
                        <div class="ellipse-container-14">
                          <div class="ellipse-3-15"></div>
                          <div class="ellipse-5-18"></div>
                          <div class="ellipse-4-14"></div>
                          <div class="ellipse-6-18"></div>
                          <div class="ellipse-7-18"></div>
                          <div class="ellipse-8-18"></div>
                          <div class="ellipse-9-17"></div>
                          <div class="ellipse-10-17"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="vector-49"
                    src="img/vector-49.svg"
                    alt="Vector 49"
                  />
                  <img
                    class="vector-50"
                    src="img/vector-50.svg"
                    alt="Vector 50"
                  />
                  <img
                    class="vector-2"
                    src="img/vector-26-2.svg"
                    alt="Vector 26"
                  />
                  <img
                    class="vector-3"
                    src="img/vector-45.svg"
                    alt="Vector 45"
                  />
                  <img class="vector" src="img/vector-47.svg" alt="Vector 51" />
                  <img
                    class="vector-1"
                    src="img/vector-46.svg"
                    alt="Vector 52"
                  />
                  <img
                    class="vector-2"
                    src="img/vector-26-2.svg"
                    alt="Vector 53"
                  />
                  <img
                    class="vector-3"
                    src="img/vector-45.svg"
                    alt="Vector 54"
                  />
                  <img
                    class="vector-48"
                    src="img/vector-48.svg"
                    alt="Vector 48"
                  />
                  <div class="ellipse-13-6"></div>
                  <div class="ellipse-14-4 ellipse-14-6"></div>
                  <div class="rectangle-7-4 rectangle-7-6"></div>
                  <div class="rectangle-8-4 rectangle-8-6"></div>
                  <img
                    class="group-19"
                    src="img/group-19@2x.png"
                    alt="Group 19"
                  />
                </div>
                <img
                  class="vector-13-3"
                  src="img/vector-6@2x.png"
                  alt="Vector 13"
                />
              </div>
              <div class="group-35">
                <div class="overlap-group7">
                  <img
                    class="group-18-1"
                    src="img/group-18@2x.png"
                    alt="Group 18"
                  />
                  <img
                    class="vector-4"
                    src="img/vector-47-1.svg"
                    alt="Vector 47"
                  />
                  <img
                    class="vector-5"
                    src="img/vector-46-1.svg"
                    alt="Vector 46"
                  />
                  <img
                    class="rectangle-17-1"
                    src="img/rectangle-17-1.svg"
                    alt="Rectangle 17"
                  />
                  <div class="group-6-5 group-6-6">
                    <div class="group-container-2">
                      <div class="group-3-6 group-3-7">
                        <div class="flex-row-9">
                          <div class="ellipse-container-15">
                            <div class="ellipse-3-16"></div>
                            <div class="ellipse-4-15"></div>
                          </div>
                          <div class="ellipse-6-19"></div>
                          <div class="ellipse-8-19"></div>
                          <div class="ellipse-5-19"></div>
                        </div>
                        <div class="ellipse-10-18"></div>
                        <div class="ellipse-7-19"></div>
                        <div class="ellipse-9-18"></div>
                      </div>
                      <div class="group-4-6 group-4-7">
                        <div class="flex-row-10">
                          <div class="ellipse-container-16">
                            <div class="ellipse-3-17"></div>
                            <div class="ellipse-4-16"></div>
                          </div>
                          <div class="ellipse-6-20"></div>
                          <div class="ellipse-8-20"></div>
                          <div class="ellipse-5-20"></div>
                        </div>
                        <div class="ellipse-10-19"></div>
                        <div class="ellipse-7-20"></div>
                        <div class="ellipse-9-19"></div>
                      </div>
                      <div class="group-5-6 group-5-7">
                        <div class="flex-row-11">
                          <div class="ellipse-container-17">
                            <div class="ellipse-3-18"></div>
                            <div class="ellipse-4-17"></div>
                          </div>
                          <div class="ellipse-6-21"></div>
                          <div class="ellipse-8-21"></div>
                          <div class="ellipse-5-21"></div>
                        </div>
                        <div class="ellipse-10-20"></div>
                        <div class="ellipse-7-21"></div>
                        <div class="ellipse-9-20"></div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="vector-49-1"
                    src="img/vector-49-1.svg"
                    alt="Vector 49"
                  />
                  <img
                    class="vector-50-1"
                    src="img/vector-50-1.svg"
                    alt="Vector 50"
                  />
                  <img
                    class="vector-6"
                    src="img/vector-26-3.svg"
                    alt="Vector 26"
                  />
                  <img
                    class="vector-7"
                    src="img/vector-45-1.svg"
                    alt="Vector 45"
                  />
                  <img
                    class="vector-4"
                    src="img/vector-47-1.svg"
                    alt="Vector 51"
                  />
                  <img
                    class="vector-5"
                    src="img/vector-46-1.svg"
                    alt="Vector 52"
                  />
                  <img
                    class="vector-6"
                    src="img/vector-26-3.svg"
                    alt="Vector 53"
                  />
                  <img
                    class="vector-7"
                    src="img/vector-45-1.svg"
                    alt="Vector 54"
                  />
                  <div class="ellipse-13-7"></div>
                  <div class="ellipse-14-5 ellipse-14-6"></div>
                  <div class="rectangle-7-5 rectangle-7-6"></div>
                  <div class="rectangle-8-5 rectangle-8-6"></div>
                  <img
                    class="group-19-1"
                    src="img/group-19-1@2x.png"
                    alt="Group 19"
                  />
                </div>
                <img
                  class="vector-48-1"
                  src="img/vector-6@2x.png"
                  alt="Vector 48"
                />
                <img
                  class="vector-13-4"
                  src="img/vector-6@2x.png"
                  alt="Vector 13"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
