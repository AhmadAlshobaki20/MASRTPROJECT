import hero_image from "../../assets/hero-imnage.png";
import "./HeroSection.css";
function HeroSection() {
  return (
    <>
      <main>
        <div className="editorial">
          <h1 id="desc">Hybrid Education Made Simple</h1>
          <p>
            Discover a seamless blend of digital and in-person learning with our
            app. Access study materials, attend live classes, and collaborate
            with peers effortlessly.
          </p>
          <div className="icons">
            <div id="google-paly">
              {/* google-store icon */}
              <svg
                width="35"
                height="39"
                viewBox="0 0 35 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.764569 1.11967C0.320789 1.57324 0.0639648 2.27939 0.0639648 3.19389V35.8135C0.0639648 36.728 0.320789 37.4342 0.764569 37.8877L0.874099 37.9873L19.5959 19.7157V19.2843L0.874099 1.01274L0.764569 1.11967Z"
                  fill="url(#paint0_linear_0_1)"
                />
                <path
                  d="M25.8294 25.8091L19.5957 19.7155V19.2841L25.837 13.1905L25.9767 13.2697L33.368 17.3758C35.4774 18.541 35.4774 20.4585 33.368 21.6311L25.9767 25.7298L25.8294 25.8091Z"
                  fill="url(#paint1_linear_0_1)"
                />
                <path
                  d="M25.977 25.7299L19.596 19.4999L0.764648 37.8876C1.46525 38.6067 2.60775 38.6933 3.90699 37.9742L25.977 25.7299Z"
                  fill="url(#paint2_linear_0_1)"
                />
                <path
                  d="M25.977 13.27L3.90699 1.02563C2.60775 0.313943 1.46525 0.400597 0.764648 1.11966L19.596 19.5L25.977 13.27Z"
                  fill="url(#paint3_linear_0_1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="17.9337"
                    y1="36.1532"
                    x2="-6.81327"
                    y2="10.8066"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00A0FF" />
                    <stop offset="0.0066" stop-color="#00A1FF" />
                    <stop offset="0.2601" stop-color="#00BEFF" />
                    <stop offset="0.5122" stop-color="#00D2FF" />
                    <stop offset="0.7604" stop-color="#00DFFF" />
                    <stop offset="1" stop-color="#00E3FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="36.1147"
                    y1="19.4977"
                    x2="-0.440496"
                    y2="19.4977"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE000" />
                    <stop offset="0.4087" stop-color="#FFBD00" />
                    <stop offset="0.7754" stop-color="#FFA500" />
                    <stop offset="1" stop-color="#FF9C00" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_1"
                    x1="22.5072"
                    y1="16.1131"
                    x2="-11.0516"
                    y2="-18.2589"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3A44" />
                    <stop offset="1" stop-color="#C31162" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_0_1"
                    x1="-3.9756"
                    y1="48.7401"
                    x2="11.0099"
                    y2="33.3916"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#32A071" />
                    <stop offset="0.0685" stop-color="#2DA771" />
                    <stop offset="0.4762" stop-color="#15CF74" />
                    <stop offset="0.8009" stop-color="#06E775" />
                    <stop offset="1" stop-color="#00F076" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="content-icon">
                <span>GET IT ON</span>
                <h1>Google play</h1>
              </div>
            </div>
            <div id="app-store">
              {/* AppStore-icon */}
              <svg
                width="32"
                height="38"
                viewBox="0 0 32 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5782 20.1812C26.5343 15.4273 30.5705 13.1145 30.7551 13.0068C28.4692 9.75742 24.9262 9.31344 23.6812 9.27804C20.7054 8.97272 17.819 11.0141 16.3031 11.0141C14.757 11.0141 12.4227 9.30754 9.90693 9.35769C6.66949 9.40637 3.64082 11.2339 1.97975 14.0718C-1.44831 19.8582 1.10836 28.3616 4.3927 33.0388C6.03562 35.3295 7.95539 37.8871 10.4682 37.7972C12.9265 37.6983 13.8448 36.2691 16.8114 36.2691C19.7508 36.2691 20.6132 37.7972 23.1759 37.7396C25.8142 37.6983 27.4753 35.4386 29.0607 33.1273C30.9593 30.5018 31.7218 27.9161 31.7521 27.7834C31.69 27.7627 26.6281 25.8792 26.5782 20.1812Z"
                  fill="white"
                />
                <path
                  d="M21.7372 6.2012C23.0594 4.58902 23.9641 2.3957 23.7129 0.169922C21.7992 0.252522 19.4059 1.46055 18.0277 3.03732C16.8084 4.42677 15.7192 6.70417 16.0006 8.84587C18.1503 9.00222 20.3575 7.7883 21.7372 6.2012Z"
                  fill="white"
                />
              </svg>
              <div className="content-icon">
                <span>Download on the</span>
                <h1>App Store</h1>
              </div>
            </div>
          </div>
        </div>
        <img className='Hero-img' src={hero_image} style={{width:'600px', height:'400px'}} alt=''/>
      </main>
    </>
  );
}
export default HeroSection;
