import * as React from 'react';

interface CompanyIconProps {
    className?: string;
}

export const CompanyIcon: React.FC<CompanyIconProps> = (props: CompanyIconProps) => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={props.className} xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.72">
        <path d="M18.4 16H16.8V17.6H18.4V16Z" fill="#090909"/>
        <path d="M18.4 19.2002H16.8V20.8002H18.4V19.2002Z" fill="#090909"/>
        <path d="M18.4 22.3999H16.8V23.9999H18.4V22.3999Z" fill="#090909"/>
        <path d="M18.4 25.6001H16.8V27.2001H18.4V25.6001Z" fill="black"/>
        <path d="M21.6 16H20V17.6H21.6V16Z" fill="black"/>
        <path d="M21.6 19.2002H20V20.8002H21.6V19.2002Z" fill="black"/>
        <path d="M21.6 22.3999H20V23.9999H21.6V22.3999Z" fill="black"/>
        <path d="M21.6 25.6001H20V27.2001H21.6V25.6001Z" fill="black"/>
        <path d="M24.8 16H23.2V17.6H24.8V16Z" fill="black"/>
        <path d="M24.8 19.2002H23.2V20.8002H24.8V19.2002Z" fill="black"/>
        <path d="M24.8 22.3999H23.2V23.9999H24.8V22.3999Z" fill="black"/>
        <path d="M24.8 25.6001H23.2V27.2001H24.8V25.6001Z" fill="black"/>
        <path d="M28 16H26.4V17.6H28V16Z" fill="black"/>
        <path d="M21.6 12.7998H20V14.3998H21.6V12.7998Z" fill="black"/>
        <path d="M24.8 12.7998H23.2V14.3998H24.8V12.7998Z" fill="black"/>
        <path d="M28 12.7998H26.4V14.3998H28V12.7998Z" fill="black"/>
        <path d="M28 19.2002H26.4V20.8002H28V19.2002Z" fill="black"/>
        <path d="M28 22.3999H26.4V23.9999H28V22.3999Z" fill="black"/>
        <path d="M28 25.6001H26.4V27.2001H28V25.6001Z" fill="black"/>
        <path d="M31.2 16H29.6V17.6H31.2V16Z" fill="black"/>
        <path d="M31.2 19.2002H29.6V20.8002H31.2V19.2002Z" fill="black"/>
        <path d="M31.2 22.3999H29.6V23.9999H31.2V22.3999Z" fill="black"/>
        <path d="M31.2 25.6001H29.6V27.2001H31.2V25.6001Z" fill="black"/>
        <path d="M47.2009 12C47.2006 12 47.2003 12 47.2 12H35.2V0.8C35.2003 0.3584 34.8425 0.000300189 34.4009 1.88515e-07C34.4006 1.88515e-07 34.4003 1.88515e-07 34.4 1.88515e-07H13.6C13.1584 -0.000299811 12.8003 0.3575 12.8 0.7991C12.8 0.7994 12.8 0.7997 12.8 0.8V12H0.8C0.3584 11.9997 0.000300189 12.3575 1.88515e-07 12.7991C1.88515e-07 12.7994 1.88515e-07 12.7997 1.88515e-07 12.8V41.6C-0.000299811 42.0416 0.3575 42.3997 0.7991 42.4C0.7994 42.4 0.7997 42.4 0.8 42.4H2.4723C2.4259 42.6642 2.4017 42.9318 2.4 43.2V47.2C2.3997 47.6416 2.7575 47.9997 3.1991 48C3.1994 48 3.1997 48 3.2 48H44.8C45.2416 48.0003 45.5997 47.6425 45.6 47.2009C45.6 47.2006 45.6 47.2003 45.6 47.2V43.2C45.5984 42.9318 45.5742 42.6642 45.5277 42.4H47.2C47.6416 42.4003 47.9997 42.0425 48 41.6009C48 41.6006 48 41.6003 48 41.6V12.8C48.0003 12.3584 47.6425 12.0003 47.2009 12ZM34.4 34.4C34.4 35.2837 33.6837 36 32.8 36C31.9163 36 31.2 35.2837 31.2 34.4C31.2 33.5163 31.9163 32.8 32.8 32.8C33.6832 32.8011 34.3989 33.5168 34.4 34.4ZM15.2 32.8C16.0837 32.8 16.8 33.5163 16.8 34.4C16.8 35.2837 16.0837 36 15.2 36C14.3163 36 13.6 35.2837 13.6 34.4C13.6011 33.5168 14.3168 32.8011 15.2 32.8ZM10.4 46.4H4V43.2C4 41.4327 5.4327 40 7.2 40C8.9673 40 10.4 41.4327 10.4 43.2V46.4ZM5.6 36.8C5.6 35.9163 6.3163 35.2 7.2 35.2C8.0837 35.2 8.8 35.9163 8.8 36.8C8.8 37.6837 8.0837 38.4 7.2 38.4C6.3168 38.3989 5.6011 37.6832 5.6 36.8ZM10.5212 39.7425C10.2195 39.4515 9.8812 39.2011 9.5148 38.9976C10.735 37.7192 10.6879 35.6936 9.4095 34.4733C8.1311 33.253 6.1055 33.3002 4.8852 34.5786C3.7049 35.8151 3.7049 37.761 4.8852 38.9975C4.1216 39.4213 3.4872 40.0442 3.0494 40.7999H1.6V13.6H12.8V32.3056C11.7014 33.5383 11.7385 35.4095 12.8852 36.5976C11.6852 37.2613 10.8253 38.4053 10.5212 39.7425ZM18.4 46.4H12V40.8C12 39.0327 13.4327 37.6 15.2 37.6C16.9673 37.6 18.4 39.0327 18.4 40.8V46.4ZM28 46.4H20V40.8C20 38.5909 21.7909 36.8 24 36.8C26.2091 36.8 28 38.5909 28 40.8V46.4ZM21.6 32.8C21.6 31.4745 22.6745 30.4 24 30.4C25.3255 30.4 26.4 31.4745 26.4 32.8C26.4 34.1255 25.3255 35.2 24 35.2C22.6751 35.1986 21.6014 34.1249 21.6 32.8ZM28.8722 38.0495C28.3365 37.1051 27.5395 36.3356 26.5769 35.8335C28.2666 34.4103 28.4826 31.8868 27.0595 30.1971C25.6363 28.5074 23.1128 28.2914 21.4231 29.7145C19.7334 31.1377 19.5174 33.6612 20.9405 35.3509C21.0873 35.5252 21.2487 35.6866 21.4231 35.8335C20.4605 36.3356 19.6635 37.1051 19.1278 38.0495C18.7072 37.4495 18.1556 36.953 17.5148 36.5976C18.7413 35.3429 18.7185 33.3314 17.4637 32.1049C16.6558 31.3151 15.4893 31.0139 14.4 31.3136V1.6H33.6V31.3136C33.3393 31.2417 33.0704 31.2035 32.8 31.2C31.0374 31.1953 29.6047 32.6204 29.6 34.3831C29.5978 35.2079 29.9151 36.0016 30.4852 36.5976C29.8444 36.953 29.2928 37.4495 28.8722 38.0495ZM36 43.2V46.4H29.6V40.8C29.6 39.0327 31.0327 37.6 32.8 37.6C34.5673 37.6 36 39.0327 36 40.8V43.2ZM44 46.4H37.6V43.2C37.6 41.4327 39.0327 40 40.8 40C42.5673 40 44 41.4327 44 43.2V46.4ZM39.2 36.8C39.2 35.9163 39.9163 35.2 40.8 35.2C41.6837 35.2 42.4 35.9163 42.4 36.8C42.4 37.6837 41.6837 38.4 40.8 38.4C39.9168 38.3989 39.2011 37.6832 39.2 36.8ZM46.4 40.8H44.9506C44.5128 40.0443 43.8784 39.4214 43.1148 38.9976C44.335 37.7192 44.2879 35.6936 43.0095 34.4733C41.7311 33.2531 39.7055 33.3002 38.4852 34.5786C37.3049 35.8151 37.3049 37.761 38.4852 38.9975C38.1188 39.201 37.7804 39.4514 37.4788 39.7424C37.1748 38.4052 36.3148 37.2612 35.1148 36.5975C36.2615 35.4094 36.2987 33.5382 35.2001 32.3055V13.6H46.4001V40.8H46.4Z" fill="black"/>
        <path d="M39.2 18.3999H37.6V31.1999H39.2V18.3999Z" fill="black"/>
        <path d="M44 18.3999H42.4V31.1999H44V18.3999Z" fill="black"/>
        <path d="M5.6 18.3999H4V31.1999H5.6V18.3999Z" fill="black"/>
        <path d="M10.4 18.3999H8.80005V31.1999H10.4V18.3999Z" fill="black"/>
        <path d="M28.8009 3.2002C28.8006 3.2002 28.8003 3.2002 28.8 3.2002H19.2C18.7584 3.1999 18.4003 3.5577 18.4 3.9993C18.4 3.9996 18.4 3.9999 18.4 4.0002V10.4002C18.3997 10.8418 18.7575 11.1999 19.1991 11.2002C19.1994 11.2002 19.1997 11.2002 19.2 11.2002H28.8C29.2416 11.2005 29.5997 10.8427 29.6 10.4011C29.6 10.4008 29.6 10.4005 29.6 10.4002V4.0002C29.6003 3.5586 29.2425 3.2005 28.8009 3.2002ZM28 9.60019H20V4.8002H28V9.60019Z" fill="black"/>
        </g>
    </svg>
);