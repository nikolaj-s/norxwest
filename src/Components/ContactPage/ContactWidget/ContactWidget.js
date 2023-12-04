import React from 'react'

import "./ContactWidget.css";

export const ContactWidget = (props) => {

    const openGit = () => {
        window.open("https://github.com/nikolaj-s", "_blank")
    }

    const openInstagram = () => {
        window.open("https://www.instagram.com/nor._x_west/?hl=en", "_blank")
    }

    const openBubble = () => {
        window.open("https://thebubble.network/user/norxwest", "_blank")
    }

    return (
        <div className="contact-widget-container">
            <p>
            Please feel free to reach out to me via the contact form or by email, and I will make it a priority to respond to you within one business day.
            </p>
            <ul>
                <li>norxwestdesigns@gmail.com</li>
            </ul>
            <div className="social-media-icons">
                <div onClick={openGit} className="icon-container">
                    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.957 8.19629C28.3916 8.18555 6.875 29.6914 6.875 56.2354C6.875 77.2256 20.335 95.0684 39.0801 101.621C41.6045 102.255 41.2178 100.461 41.2178 99.2363V90.9111C26.6406 92.6191 26.0498 82.9727 25.0723 81.3613C23.0957 77.9883 18.4229 77.1289 19.8193 75.5176C23.1387 73.8096 26.5225 75.9473 30.4434 81.7373C33.2793 85.9375 38.8115 85.2285 41.6152 84.5303C42.2275 82.0059 43.5381 79.75 45.3428 77.999C30.2393 75.292 23.9443 66.0752 23.9443 55.1182C23.9443 49.8008 25.6953 44.9131 29.1328 40.9707C26.9414 34.4717 29.3369 28.9072 29.6592 28.0801C35.9004 27.5215 42.3887 32.5488 42.8936 32.9463C46.4385 31.9902 50.4883 31.4854 55.0215 31.4854C59.5762 31.4854 63.6367 32.0117 67.2139 32.9785C68.4277 32.0547 74.4434 27.7363 80.2441 28.2627C80.5557 29.0898 82.8975 34.5254 80.835 40.9385C84.3154 44.8916 86.0879 49.8223 86.0879 55.1504C86.0879 66.1289 79.75 75.3564 64.6035 78.0205C65.9009 79.2963 66.931 80.8179 67.6337 82.4963C68.3364 84.1747 68.6976 85.9763 68.6963 87.7959V99.8809C68.7822 100.848 68.6963 101.804 70.3076 101.804C89.332 95.3906 103.028 77.4189 103.028 56.2461C103.028 29.6914 81.501 8.19629 54.957 8.19629Z" fill="black"/>
                    </svg>
                </div>
                <div onClick={openInstagram} className="icon-container">
                    <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.2379 4.17525C33.8322 3.96375 35.297 3.91675 47 3.91675C58.703 3.91675 60.1679 3.96766 64.7582 4.17525C69.3485 4.38283 72.4818 5.11525 75.2235 6.17666C78.0944 7.26158 80.699 8.9575 82.8532 11.1508C85.0465 13.3011 86.7385 15.9017 87.8195 18.7766C88.8849 21.5182 89.6133 24.6516 89.8249 29.2341C90.0363 33.8362 90.0834 35.301 90.0834 47.0001C90.0834 58.7031 90.0324 60.1679 89.8249 64.7622C89.6173 69.3447 88.8849 72.478 87.8195 75.2197C86.7385 78.0949 85.0437 80.6999 82.8532 82.8532C80.699 85.0466 78.0944 86.7386 75.2235 87.8196C72.4818 88.8849 69.3485 89.6134 64.766 89.8249C60.1678 90.0364 58.703 90.0834 47 90.0834C35.297 90.0834 33.8322 90.0325 29.2379 89.8249C24.6554 89.6173 21.5221 88.8849 18.7804 87.8196C15.9053 86.7384 13.3003 85.0437 11.1469 82.8532C8.95501 80.7017 7.25884 78.098 6.1766 75.2236C5.11519 72.4819 4.38669 69.3486 4.17519 64.7661C3.96369 60.164 3.91669 58.6992 3.91669 47.0001C3.91669 35.2971 3.9676 33.8322 4.17519 29.2419C4.38277 24.6516 5.11519 21.5182 6.1766 18.7766C7.26043 15.9021 8.9579 13.2984 11.1508 11.1469C13.3012 8.95554 15.9035 7.2594 18.7765 6.17666C21.5182 5.11525 24.6515 4.38675 29.234 4.17525H29.2379ZM64.4096 11.9302C59.8663 11.7227 58.5033 11.6796 47 11.6796C35.4968 11.6796 34.1338 11.7227 29.5904 11.9302C25.3879 12.1222 23.1084 12.8232 21.5887 13.4147C19.5794 14.198 18.142 15.1262 16.6341 16.6342C15.2047 18.0248 14.1046 19.7177 13.4146 21.5887C12.8232 23.1084 12.1221 25.3879 11.9302 29.5905C11.7226 34.1338 11.6795 35.4968 11.6795 47.0001C11.6795 58.5033 11.7226 59.8663 11.9302 64.4097C12.1221 68.6122 12.8232 70.8917 13.4146 72.4114C14.1039 74.2797 15.2045 75.9756 16.6341 77.366C18.0245 78.7956 19.7204 79.8962 21.5887 80.5855C23.1084 81.1769 25.3879 81.878 29.5904 82.0699C34.1338 82.2775 35.4929 82.3206 47 82.3206C58.5072 82.3206 59.8663 82.2775 64.4096 82.0699C68.6122 81.878 70.8917 81.1769 72.4114 80.5855C74.4206 79.8022 75.858 78.8739 77.3659 77.366C78.7955 75.9756 79.8961 74.2797 80.5854 72.4114C81.1769 70.8917 81.8779 68.6122 82.0699 64.4097C82.2774 59.8663 82.3205 58.5033 82.3205 47.0001C82.3205 35.4968 82.2774 34.1338 82.0699 29.5905C81.8779 25.3879 81.1769 23.1084 80.5854 21.5887C79.8021 19.5795 78.8738 18.1421 77.3659 16.6342C75.9752 15.2049 74.2824 14.1048 72.4114 13.4147C70.8917 12.8232 68.6122 12.1222 64.4096 11.9302ZM41.4971 60.2815C44.5704 61.5608 47.9924 61.7335 51.1788 60.77C54.3652 59.8065 57.1183 57.7667 58.9678 54.9989C60.8173 52.2311 61.6486 48.907 61.3195 45.5944C60.9905 42.2818 59.5216 39.1862 57.1638 36.8363C55.6607 35.3342 53.8433 34.184 51.8423 33.4686C49.8414 32.7531 47.7067 32.4902 45.592 32.6988C43.4772 32.9074 41.435 33.5823 39.6124 34.6748C37.7898 35.7674 36.2321 37.2505 35.0515 39.0173C33.8708 40.7842 33.0966 42.7908 32.7845 44.8928C32.4725 46.9947 32.6304 49.1397 33.2468 51.1734C33.8632 53.207 34.9229 55.0786 36.3495 56.6536C37.7761 58.2285 39.5342 59.4675 41.4971 60.2815ZM31.3412 31.3412C33.3975 29.2849 35.8388 27.6537 38.5255 26.5408C41.2123 25.4279 44.0919 24.8551 47 24.8551C49.9081 24.8551 52.7878 25.4279 55.4745 26.5408C58.1613 27.6537 60.6025 29.2849 62.6589 31.3412C64.7152 33.3976 66.3464 35.8388 67.4593 38.5256C68.5722 41.2123 69.145 44.092 69.145 47.0001C69.145 49.9082 68.5722 52.7878 67.4593 55.4746C66.3464 58.1613 64.7152 60.6026 62.6589 62.6589C58.5059 66.8119 52.8732 69.145 47 69.145C41.1268 69.145 35.4942 66.8119 31.3412 62.6589C27.1882 58.5059 24.8551 52.8733 24.8551 47.0001C24.8551 41.1269 27.1882 35.4942 31.3412 31.3412ZM74.0564 28.1531C74.5659 27.6724 74.9739 27.0943 75.256 26.4531C75.5382 25.812 75.6889 25.1207 75.6991 24.4202C75.7093 23.7198 75.5788 23.0244 75.3155 22.3753C75.0521 21.7261 74.6612 21.1364 74.1659 20.6411C73.6705 20.1457 73.0808 19.7548 72.4317 19.4914C71.7825 19.2281 71.0872 19.0977 70.3867 19.1079C69.6863 19.1181 68.995 19.2687 68.3538 19.5509C67.7126 19.8331 67.1345 20.241 66.6539 20.7506C65.719 21.7416 65.2072 23.058 65.227 24.4202C65.2469 25.7825 65.7969 27.0834 66.7602 28.0467C67.7236 29.0101 69.0245 29.5601 70.3867 29.5799C71.749 29.5998 73.0653 29.0879 74.0564 28.1531Z" fill="black"/>
                    </svg>
                </div>
                <div onClick={openBubble} className="icon-container">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="21" fill="white" stroke="black" stroke-width="3"/>
                    <circle cx="38.5" cy="22.5" r="1.5" fill="black"/>
                    <ellipse cx="32.5726" cy="12.6357" rx="2.10191" ry="8.02677" transform="rotate(-37.71 32.5726 12.6357)" fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}