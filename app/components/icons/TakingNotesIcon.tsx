import { colors } from "app/theme"
import * as React from "react"
import { Dimensions } from "react-native"
import Svg, { SvgProps, G, Path, Defs, LinearGradient, Stop, ClipPath } from "react-native-svg"

const { width, height } = Dimensions.get("window")

export const TakingNotesIcon = (props: SvgProps) => (
  <Svg width={width} height={height * 0.55} viewBox="0 0 1164 1274" fill="none" {...props}>
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill="#e4e4e4"
          fillRule="evenodd"
          d="M274.44 643.529a168.833 168.833 0 0 0 25.9-46.021c7.737 24.825 10.669 51.08 13.6 77.316 3.443 30.824 6.883 61.622 18.108 90.043.302.764.614 1.519.936 2.284 2.561 6.028 5.852 12.066 10.3 16.575a24.58 24.58 0 0 0 10.738 6.612c9.473 2.7 24.616-.526 33.673-5.9.7-.412 1.376-.845 2-1.288 11.935-8.423 16.001-26.377 16.927-44.23.77-14.564-.552-29.058-1.393-38.269-.215-2.36-.399-4.373-.507-5.951a666.346 666.346 0 0 0-38.631-182.009l-.05-.523c-2.694.252-5.366.505-8.046.76-4.49.426-9.006.855-13.702 1.283-19.566 1.002-39.384 1.504-59.202 2.007-15.217.386-30.435.772-45.541 1.384l.07 1.761c.243 26.87-6.733 54.425-23.257 75.619-16.524 21.194-43.395 35.082-70.134 32.375-3.852-.391-7.709-1.107-11.56-1.822-8.356-1.552-16.687-3.099-24.891-1.308a33.014 33.014 0 0 0-17.3 10.325 38.482 38.482 0 0 0-9.631 21.013c-1.733 14.593 4.75 29.457 15.267 39.722 13.837 13.516 33.925 19.413 53.257 18.759 19.332-.654 38.031-7.307 55.28-16.062 26.055-13.214 49.694-31.52 67.789-54.455Zm84.767-116.964a1.51 1.51 0 1 0-2.828 1.058 562.588 562.588 0 0 1 34.364 235.156 1.51 1.51 0 0 0 3.012.204 565.62 565.62 0 0 0-34.548-236.418Z"
          clipRule="evenodd"
        />
        <Path
          fill="#e4e4e4"
          d="m859.139 452.7.1.533a52.154 52.154 0 0 1-33.351 19.3c-13.032 1.862-25.451-2.425-36.129-10.124l-.292-.1c.191-.584.382-1.167.564-1.751 19.669-13.704 47.622-18.153 69.108-7.858ZM801.383 423.375l.785-2.747c11.926-13.123 31.067-19.463 48.437-15.669l.352.171a38.797 38.797 0 0 1-49.725 18.779c.05-.182.1-.353.151-.534ZM811.366 385.466c-.02.081-.03.151-.05.231l-.493-.121a25.359 25.359 0 0 1 9.785-19.586 25.36 25.36 0 0 1 21.391-4.668l.735.835a44.425 44.425 0 0 1-12.963 15.287 44.424 44.424 0 0 1-18.365 8.031l-.04-.009ZM810.621 385.6l-1.318.8a26.54 26.54 0 0 1-26.537-19.082 26.563 26.563 0 0 1-.735-11.618l.614-.765c7.175-.815 16.142 4.66 20.289 10.567 4.147 5.907 5.996 13.079 7.687 20.098ZM800.508 422.561c-.382.463-.745.926-1.107 1.409v.02c-9.047 2.305-19.183-1.761-25.422-8.846-6.723-7.638-9.459-18.1-9.751-28.279l.22-.312c16.807 3.904 32.276 19.141 36.06 36.008Z"
        />
        <Path
          fill="#e4e4e4"
          d="M799.399 423.97c.362-.483.725-.946 1.107-1.409.091.352.161.694.221 1.047-.435.15-.878.278-1.328.382v-.02ZM767.76 156.123c14.17 7.89 25.683 22.432 25.632 38.655-.05 15.639-13.9 31.027-29.255 29.839a24.962 24.962 0 0 1-1.691-.2c-11.08-1.731-20.087-12.278-20.067-23.489.02-11.211 9.078-21.728 20.158-23.418l-43.465-1.137-.242-.1c7.96-18.467 20.288-27.031 42.741-23.147l.02-.04a69.643 69.643 0 0 1 6.169 3.037ZM788.692 460.873l.312.423c-.413.292-.815.594-1.218.906-10.386 1.1-21.325-1.349-30.976-6.33a219.055 219.055 0 0 0-3.442-20.862 45.507 45.507 0 0 1 10.909 3.844c9.098 4.589 20.108 12.781 24.415 22.019ZM775.911 502.789a81.742 81.742 0 0 1 90.654 5.5l.141.211a73.615 73.615 0 0 1-91.339-4.4l-.382-.141c.06-.171.121-.342.181-.5.111-.282.211-.564.312-.835l.433.165Z"
        />
        <Path
          fill="#e4e4e4"
          d="M774.252 503.976c-5.827 5.414-13.395 8.685-21.4 10.164a153.272 153.272 0 0 0 4.056-20.923c.141-1.177.272-2.365.372-3.542a48.137 48.137 0 0 1 17.672 13.707l.211.081c-.06.161-.121.332-.181.5a2.417 2.417 0 0 1-.1.242l-.63-.229Z"
        />
        <Path
          fill="url(#c)"
          d="M717.563 826.881c-15.679-22.784-30.664-48.507-37.89-75.146l.664-.181c40.758-79.6 118.048-139.574 205.28-159.279l.574.03a281.584 281.584 0 0 1-48.417 142.724c-28.833 42.167-62.345 74.4-119.648 91.459l-.563.393Z"
        />
        <Path
          fill="#e4e4e4"
          d="M757.283 489.675a106.29 106.29 0 0 1-.372 3.542 152.97 152.97 0 0 1-4.056 20.923 60.098 60.098 0 0 1-18.246.513 48.776 48.776 0 0 1-34.41-21.453l.171-.473c11.05-7.638 25.944-10.507 39.208-8.443a65.644 65.644 0 0 1 17.705 5.391ZM754.599 556.538a70.45 70.45 0 0 1 80.621 4.257 61.33 61.33 0 0 1-41.382 13.777 60.235 60.235 0 0 1-39.711-17.088l-.05-.02c.131-.312.262-.624.393-.946a.03.03 0 0 0 .009-.013c.001-.006.002-.011.001-.017l.119.05ZM753.368 435.009c1.479 6.924 2.647 13.878 3.442 20.862a57.085 57.085 0 0 1-22.482-20.339l.2-.674a46.047 46.047 0 0 1 18.84.151ZM753.65 556.187a54.651 54.651 0 0 1-18.487 4 377.984 377.984 0 0 0 6.39-14.009 45.323 45.323 0 0 1 12.097 10.009Z"
        />
        <Path
          fill="#e4e4e4"
          d="M722.886 538.685a71.033 71.033 0 0 1 18.668 7.487 380.394 380.394 0 0 1-6.39 14.009c-17.028.8-35-5.5-45.538-18.054l-.362-.9a54.471 54.471 0 0 1 33.622-2.542ZM734.973 603.658a56.296 56.296 0 0 1 60.181 12.006l-.151.161c-9.621 6.813-23.589 10.3-35.092 7.729-11.392-2.546-20.379-8.464-26.186-18.537.141-.312.282-.624.413-.946.079-.157.149-.319.211-.483.03-.06.06-.121.081-.171l.543.241Z"
        />
        <Path
          fill="#e4e4e4"
          d="M734.349 603.587a5.43 5.43 0 0 1-.211.483l-.7-.312c-6.511 4.428-14.572 5.847-22.462 4.982 3.059-6.421 6.27-12.8 9.5-19.182a47.423 47.423 0 0 1 13.737 13.969l.136.06Z"
        />
        <Path
          fill="#e4e4e4"
          d="M720.471 589.557c-3.23 6.38-6.441 12.761-9.5 19.182a43.076 43.076 0 0 1-10.627-2.586c-10.748-4.116-19.685-11.9-27.534-20.309v-.3c10.144-4.086 25.542-4.992 35.948-1.661a46.607 46.607 0 0 1 11.713 5.674ZM565.881 227.786l6.149 16.9-18.507-7.075.231-.6a21.824 21.824 0 0 1 11.141-8.856l.986-.369Z"
        />
        <Path
          fill="url(#d)"
          d="M539.213 579.022c-7.679 14.552-15.548 29.084-22.271 43.969l-1.4-.634a161.864 161.864 0 0 1-41.986-95.273c-.302-3.593-.48-7.193-.533-10.8a161.952 161.952 0 0 1 25.532-89.648l1.55.986c32.908 42.217 47.3 98.373 38.766 151.218l.342.182Z"
        />
        <Path
          fill="#e4e4e4"
          d="m515.543 622.355 1.4.634c-.654 1.449-1.288 2.9-1.922 4.358l-.946-.413a112.58 112.58 0 0 1-75.307-127.025c10.547 3.271 25.562 9.249 33.985 16.374h.272c.05 3.6.227 7.2.533 10.8a161.866 161.866 0 0 0 41.985 95.272Z"
        />
        <Path
          fill="url(#e)"
          d="M539.836 834.167c-30-2.305-60.063-3.442-90.191-3.412a.151.151 0 0 0 .01-.07c.533-5.736-4.237-10.567-9.128-13.626-8.745-5.465-18.91-8.152-28.36-12.288-9.45-4.136-18.769-10.366-22.643-19.936l-1.832-.393c.7-.413 1.379-.845 2-1.288 11.936-8.423 16-26.377 16.927-44.23l.2.01a22.11 22.11 0 0 1 23.046 1.852 45.893 45.893 0 0 1 11.318-17.601 45.892 45.892 0 0 1 38.814-12.41 45.895 45.895 0 0 1 19.429 7.77c3.365 39.655 18.763 78.588 40.883 114.955l-.473.667Z"
        />
        <Path
          fill="#e4e4e4"
          d="M277.585 282.11a9.798 9.798 0 0 0-2.838 3.864 12.197 12.197 0 0 1-2.949 4.438c-1.4 1.127-3.653 1.419-4.891.111-1.479-1.55-.634-4.086.332-6.008 3.633-7.175 8.031-14.21 9.289-22.16.775-4.861.322-9.812.584-14.723.262-4.911 1.349-10.034 4.629-13.7 2.929-3.261 7.276-4.941 11.593-5.656 4.317-.715 8.745-.574 13.123-.805 9.238-.483 19.292-3.241 24.374-10.969 1.268-1.942 2.566-4.388 4.881-4.559 2.234-.171 4.026 2.164 4.086 4.4.06 2.236-1.107 4.317-2.3 6.209-1.177 1.842-2.435 3.714-2.778 5.847l.533.081 14.643-8.635a7.115 7.115 0 0 1 3.12-1.208 2.408 2.408 0 0 1 2.556 1.721 3.37 3.37 0 0 1-.755 2.305 35.645 35.645 0 0 1-12.761 11.754l1.218.423c5.958-.574 11.912-1.154 17.863-1.741 2.194-.221 5.082 0 5.686 2.134.584 2.073-1.671 3.784-3.663 4.629-6.32 2.687-13.194 3.643-20.1 3.794-2.355.06-4.71.02-7.045-.07-9.2-.372-18.376-1.57-27.585-1.177-5.263.231-10.969 1.208-14.532 5.1-3.794 4.136-4.056 10.3-4.106 15.911-.06 6.522-.124 13.04-.191 19.554h-.231a8230.027 8230.027 0 0 1-8.7 11.674 9.33 9.33 0 0 1-2.224 2.355 3.165 3.165 0 0 1-3.1.342 3.095 3.095 0 0 1-1.51-2.425 8.424 8.424 0 0 1 .322-2.949 55.482 55.482 0 0 1 3.427-9.861Z"
        />
        <Path
          fill="url(#f)"
          d="m344.218 829.6-1.409.494a769.987 769.987 0 0 0-73.385 3.079 35.389 35.389 0 0 1 23.428-26.086 32.359 32.359 0 0 1 39.3-39.579l.835-.352c2.556 6.028 5.847 12.065 10.3 16.574l-.936.846c.725 7.809-1.157 15.599-1.952 23.399-.76 7.433-.337 15.484 3.819 21.625Z"
        />
        <Path
          fill="url(#g)"
          d="m239.071 430.129.111-.141c5.154-17.672 10.31-35.348 15.468-53.026-9.108 3.583-17.279 9.852-21.8 18.487-5.112 9.772-4.73 22.684 2.415 31.077a24.817 24.817 0 0 0 3.806 3.603Zm101.342 65.152a4.594 4.594 0 0 0-3.673-3.21 8.563 8.563 0 0 0-2.033-.171c1.862-.523 3.683-1.711 3.975-3.351.352-1.952-1.63-3.5-3.482-4.187a21.744 21.744 0 0 0-5.958-1.218l.01-.07a14.76 14.76 0 0 0 5.636-1.711c1.6-.845 2.838-2.677 2.4-4.428-.594-2.425-3.613-3.17-6.1-3.452a18183.82 18183.82 0 0 1-25.31-2.888l-.463-.332a225.254 225.254 0 0 0 8.947-13.012 11.944 11.944 0 0 0 1.932-4.136 4.285 4.285 0 0 0-1.3-4.166c-1.952-1.5-4.78-.292-6.8 1.127a43.28 43.28 0 0 0-12.861 14.532l-.04-.01c-.221.735-.453 1.479-.684 2.2-2.174 6.874-4.378 13.8-7.95 20.057a43.861 43.861 0 0 1-3.542 5.283l.443.342a104.871 104.871 0 0 0 49.192 8.524c1.821-.01 3.617-.43 5.253-1.228a4.483 4.483 0 0 0 2.408-4.495Zm33.286-95.434.1 1c.684 25.813 2.7 51.979 10.748 78.145 2.013 8.051 5.032 17.108 3.019 25.159-1.006 4.026-6.038 6.038-11.07 7.045-3.573.322-7.035.644-10.456.976-7.206.674-14.25 1.359-21.748 2.043-34.589 1.771-69.963 1.983-104.743 3.391-4.68.181-9.349.392-14.009.634-2.013 0-5.032 1.006-7.045-1.006-7.97-7.97 2.8-16.927 2.788-25.562a82.92 82.92 0 0 1-20.48-14.824c-15.307-15.579-21.939-38.725-18.95-60.362 2.989-21.637 15.075-41.553 31.741-55.683 16.666-14.13 37.648-22.664 59.225-26.1l.453.01a7.507 7.507 0 0 1 3.09-5.827c2.778-2 6.38-2.345 9.782-2.617l3.039-.242 32.456-2.6c2.6-.211 5.183-.413 7.779-.624 3.683-.292 7.669-.513 10.788 1.469 5.052 3.22 3.351 4.166 3.079 10.144 20.047 1.379 41.583-1.761 56.558-15.146 14.975-13.385 25.793-30.765 35.324-48.457 9.531-17.692 18.014-36 29.336-52.6 2.486-3.653 5.605-7.518 9.983-8.1 3.391-.443 6.672 1.218 9.681 2.828 1.127.6 2.264 1.208 3.391 1.811 8.022 4.277 16.036 8.557 24.042 12.841 3.432 1.832 7.085 3.895 8.715 7.417 2.476 5.344-.664 11.473-3.623 16.555-12.419 21.355-23.137 43.667-35.777 64.891-12.64 21.224-27.4 41.543-46.505 57.2-17.311 14.195-38.511 24.345-60.711 26.191Z"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M321.599 322.94c-.865-5.122-1.409-11.221 2.476-14.663 2.979-2.637 7.558-2.637 10.758-5 4-2.959 4.7-8.554 5.052-13.516l3.2-44.914M329.081 263.392v-4.267M306.469 266.219c-.242-1.9-.473-3.794-.7-5.686M317.589 285.954c1.449 1.037 3.623-.06 4.337-1.681.714-1.621.413-3.492.1-5.243-1.369-7.608-2.735-15.22-4.1-22.835-.231-1.238-.413-2.647.352-3.643a4.284 4.284 0 0 1 2.707-1.318 39.295 39.295 0 0 1 14.019-.292M309.658 300.326a7.122 7.122 0 0 1-8.121-5.133"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M289.179 326.159v-.131l.423-43.053c.06-6.521.123-13.039.191-19.554.05-5.616.312-11.775 4.106-15.911 3.563-3.895 9.269-4.871 14.532-5.1 9.208-.392 18.386.805 27.585 1.177 2.335.091 4.69.131 7.045.07 6.9-.151 13.777-1.107 20.1-3.794 1.993-.845 4.247-2.556 3.663-4.629-.6-2.134-3.492-2.355-5.686-2.134-5.958.584-11.913 1.165-17.863 1.741M342.054 234.418a35.654 35.654 0 0 0 12.761-11.754 3.368 3.368 0 0 0 .755-2.305 2.408 2.408 0 0 0-2.556-1.721 7.098 7.098 0 0 0-3.12 1.208l-14.643 8.635c.312-.362.624-.725.926-1.087"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="m334.687 228.591.03-.191c.342-2.134 1.6-4 2.778-5.847 1.2-1.892 2.365-3.965 2.305-6.209-.06-2.244-1.852-4.569-4.086-4.4-2.315.171-3.613 2.617-4.881 4.559-5.082 7.729-15.136 10.486-24.374 10.969-4.378.231-8.8.091-13.123.805-4.323.714-8.665 2.395-11.593 5.656-3.281 3.663-4.378 8.786-4.629 13.7-.251 4.914.191 9.862-.584 14.723-1.258 7.95-5.656 14.985-9.289 22.16-.966 1.922-1.811 4.458-.332 6.008 1.238 1.308 3.492 1.016 4.891-.111a12.197 12.197 0 0 0 2.949-4.438 9.788 9.788 0 0 1 2.838-3.864c.141-.106.289-.204.443-.292"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M277.826 281.577c-.081.181-.161.352-.242.533a55.368 55.368 0 0 0-3.422 9.862 8.422 8.422 0 0 0-.322 2.949 3.1 3.1 0 0 0 1.51 2.425 3.16 3.16 0 0 0 3.1-.342 9.312 9.312 0 0 0 2.224-2.355c2.898-3.895 5.796-7.786 8.695-11.674M274.324 337.801a4.783 4.783 0 0 1-1.057-3.09 7.507 7.507 0 0 1 3.09-5.827c2.778-2 6.38-2.345 9.782-2.617l3.039-.242 32.456-2.6c2.6-.211 5.183-.413 7.779-.624 3.683-.292 7.669-.513 10.788 1.469 5.052 3.22 3.351 4.166 3.079 10.144M343.281 334.422c20.047 1.379 41.583-1.761 56.558-15.146 14.975-13.385 25.793-30.765 35.324-48.457 9.531-17.692 18.014-36 29.336-52.6 2.486-3.653 5.605-7.518 9.983-8.1 3.391-.443 6.672 1.218 9.681 2.828 1.127.6 2.264 1.208 3.391 1.811 8.022 4.277 16.036 8.557 24.042 12.841 3.432 1.832 7.085 3.895 8.715 7.417 2.476 5.344-.664 11.473-3.623 16.555-12.419 21.355-23.137 43.667-35.777 64.891-12.64 21.224-27.4 41.543-46.505 57.2-17.31 14.19-38.514 24.344-60.715 26.186a89.13 89.13 0 0 1-6.944.3M272.816 334.7c-21.577 3.432-42.57 11.966-59.225 26.1-16.655 14.134-28.742 34.036-31.741 55.683-2.999 21.647 3.643 44.784 18.95 60.362a82.857 82.857 0 0 0 20.48 14.824 149.033 149.033 0 0 0 14.693 6.753c11.312 4.559 24.274 8.152 35.434 3.23a31.033 31.033 0 0 0 11.714-9.51 44.099 44.099 0 0 0 3.542-5.283c3.573-6.26 5.777-13.184 7.95-20.057.231-.725.463-1.469.684-2.2.966-3.321 1.671-6.763.845-10.074-1.449-5.907-7.256-9.671-12.992-11.694-8.1-2.848-16.806-3.4-25.24-5.062-6.7-1.308-13.526-3.5-18.839-7.638a24.665 24.665 0 0 1-3.8-3.6c-7.145-8.393-7.528-21.3-2.415-31.077 4.519-8.635 12.69-14.9 21.8-18.487 1.2-.483 2.415-.906 3.643-1.288"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M221.278 491.407v.262c.01 8.635-10.758 17.591-2.788 25.562 2.013 2.013 5.032 1.006 7.045 1.006 4.66-.242 9.33-.454 14.009-.634 34.78-1.409 70.154-1.62 104.743-3.391 7.5-.684 14.542-1.369 21.748-2.043 3.422-.332 6.884-.654 10.456-.976 5.032-1.006 10.064-3.019 11.07-7.045 2.013-8.051-1.006-17.108-3.019-25.159-8.051-26.166-10.064-52.331-10.748-78.145M254.731 376.669c-.03.1-.06.191-.081.292a66038.869 66038.869 0 0 0-15.468 53.026M531.543 205.436c4.961-1.188 12.006 1.832 9.993 7.87-2.294 4.6-6.28 7.095-10.889 8.755-5.475 1.993-11.835 2.8-17.32 4.569M508.099 198.028a11.123 11.123 0 0 0 4.681 12.831 8.234 8.234 0 0 0 7.678.5c3.854-1.4 7.559-4.569 10.508-5.988M528.3 173.926c4.67.1 10.023 1.721 15.025 4.1 10.839 5.122 20.087 13.747 17.44 18-3.039 4.911-7.96 4.418-11.885 1.157a15.744 15.744 0 0 1-2.647-2.818M487.454 215.167c.03-.141.07-.272.1-.413 2.264-9.269 5.515-18.6 10.98-26.488"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M295.338 464.606a43.282 43.282 0 0 1 12.862-14.532c2.023-1.419 4.851-2.627 6.8-1.127a4.286 4.286 0 0 1 1.3 4.166 11.98 11.98 0 0 1-1.932 4.136 218.905 218.905 0 0 1-8.947 13.012l-.171.231M283.563 492.483a104.846 104.846 0 0 0 49.192 8.524c1.821-.01 3.617-.43 5.253-1.228a4.48 4.48 0 0 0 2.4-4.5 4.596 4.596 0 0 0-3.673-3.21 8.559 8.559 0 0 0-2.033-.171c-1.04.039-2.079.133-3.11.282a62.728 62.728 0 0 1-25.743-2.305"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M332.574 492.191a7.132 7.132 0 0 0 2.134-.292c1.862-.523 3.683-1.711 3.975-3.351.352-1.952-1.63-3.5-3.482-4.187a21.751 21.751 0 0 0-5.958-1.218c-2.627-.191-5.314-.091-7.95-.111A38.71 38.71 0 0 1 308 481.12M329.253 483.074a14.765 14.765 0 0 0 5.636-1.711c1.6-.845 2.838-2.677 2.4-4.428-.594-2.425-3.613-3.17-6.1-3.452-8.433-.956-16.869-1.919-25.31-2.888M366.085 512.691A666.285 666.285 0 0 1 404.72 694.7c.533 7.739 2.868 25.924 1.9 44.22-.926 17.853-4.992 35.807-16.927 44.23-.624.443-1.3.876-2 1.288-9.057 5.374-24.2 8.6-33.673 5.9a24.572 24.572 0 0 1-10.738-6.612c-4.448-4.509-7.739-10.547-10.295-16.575a112.04 112.04 0 0 1-.936-2.284c-20.782-52.613-14.884-113.368-31.711-167.36-.05-.161-.1-.312-.151-.473"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M308.542 563.975a150.924 150.924 0 0 1-8.2 33.532 168.818 168.818 0 0 1-25.9 46.021c-18.095 22.935-41.734 41.241-67.789 54.455-17.249 8.755-35.948 15.408-55.28 16.062-19.332.654-39.42-5.243-53.257-18.759-10.517-10.265-17-25.129-15.267-39.722a38.486 38.486 0 0 1 9.63-21.013 33.02 33.02 0 0 1 17.301-10.325c11.986-2.617 24.244 1.892 36.451 3.13 26.739 2.707 53.61-11.181 70.134-32.375 16.524-21.194 23.5-48.749 23.257-75.619M342.345 784.573c.725 7.809-1.157 15.6-1.952 23.4-.755 7.437-.332 15.488 3.824 21.627.2.312.423.614.644.906 4.488 5.867 11.855 8.625 18.819 11.09 9.108 3.22 18.219 6.444 27.333 9.671 8.635 3.059 17.763 6.169 26.79 4.569 9.067-1.61 16.6-7.719 23.68-13.606 3.7-3.09 7.689-6.682 8.162-11.473a.151.151 0 0 0 .01-.07c.533-5.736-4.237-10.567-9.128-13.626-8.745-5.465-18.91-8.152-28.36-12.288-9.45-4.136-18.769-10.366-22.643-19.936"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M91.406 634.301c-6.028-2.737-12.982-5.5-19.03-2.818-5.636 2.5-8.354 8.8-10.578 14.532-5.988 15.508-11.976 31.009-17.964 46.505-2.345 6.078-4.71 12.851-2.355 18.92 2.264 5.847 8.212 9.259 13.738 12.217 4.96 2.647 10.829 5.354 15.97 3.069 2.809-1.248 4.8-3.774 6.672-6.209l18.93-24.576M531.8 224.032c-7.7 43.908-3.552 89.748 9.571 132.459 12.469 40.607 33.09 80.158 31.9 122.627-1 35.746-17.088 67.83-34.056 99.9-7.679 14.552-15.548 29.084-22.271 43.969-.654 1.449-1.288 2.9-1.922 4.358a264.677 264.677 0 0 0-4.509 11.03 179.762 179.762 0 0 0-11.08 80.168c3.359 39.657 18.757 78.591 40.877 114.957l183.271 1.952a530.793 530.793 0 0 1-6.018-8.574c-15.679-22.784-30.664-48.507-37.89-75.146a128.796 128.796 0 0 1-4.056-22.06c-.365-3.968-.51-7.952-.433-11.936.845-41.9 15.8-65.938 33.412-103.969a305.935 305.935 0 0 1 2.375-5.032c3.059-6.421 6.27-12.8 9.5-19.182 4.971-9.772 10-19.524 14.693-29.376a377.984 377.984 0 0 0 6.39-14.009 226.851 226.851 0 0 0 11.3-32.033 153.12 153.12 0 0 0 4.056-20.923c.141-1.177.272-2.365.372-3.542a161.48 161.48 0 0 0-.473-33.8 219.055 219.055 0 0 0-3.442-20.862c-4.549-21.385-11.936-42.479-19.564-62.979-14.482-38.927-30.312-78.628-30.04-120.161.07-9.923 2.133-19.856 3.8-29.819.1-.564.191-1.127.282-1.691 2.908-17.974 6.129-32.868 10.98-44.089 7.96-18.467 20.288-27.031 42.741-23.147"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M762.536 177.508c-11.08 1.691-20.138 12.2-20.158 23.418-.02 11.218 8.987 21.758 20.067 23.489a23.18 23.18 0 0 0 1.691.2c15.357 1.188 29.205-14.2 29.255-29.839.05-16.223-11.463-30.765-25.632-38.655a69.94 69.94 0 0 0-6.169-3.039c-12.68-5.515-26.81-7.457-40.658-8.816-34.156-3.361-68.534-3.754-102.861-4.146-14.039-.161-28.591-.221-41.432 5.455-13.737 6.068-23.972 18.819-30.9 32.385M708.425 222.191l55.692 2.817.423.021M719.071 176.37l43.465 1.138M482.523 169.86l23.197-20.842 22.442 25.039 20.721 23.126 9.883 11.03 7.115 19.574 6.149 16.897-18.507-7.075-13.697-5.243"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="m520.373 211.151-12.147-13.244-9.229-10.074-16.474-17.974M539.826 232.366l-7.82-8.524-1.177-1.288M553.755 237.001a21.81 21.81 0 0 1 11.141-8.856M500.306 719.158c-.292-.211-.584-.423-.876-.614a45.9 45.9 0 0 0-69.561 22.241 22.113 22.113 0 0 0-23.046-1.852c.765-.262 1.52-.513 2.284-.775M332.152 767.501a32.36 32.36 0 0 0-39.3 39.58 35.384 35.384 0 0 0-23.428 26.085 769.064 769.064 0 0 1 73.385-3.079M448.418 830.755h1.228c30.091-.03 60.154 1.108 90.191 3.412M718.125 826.488c57.3-17.058 90.815-49.292 119.648-91.459A281.586 281.586 0 0 0 886.19 592.3l.03-.634M885.617 592.275C798.384 611.98 721.1 671.95 680.337 751.554M702.678 801.671a2004.39 2004.39 0 0 1 28.158-34.257 1965.83 1965.83 0 0 1 38.947-45.015 1949.687 1949.687 0 0 1 36.531-39.913 1971.249 1971.249 0 0 1 41.271-42.67"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M806.274 681.8c5.716-16.323 10.537-32.778 16.253-49.111M806.1 682.516l.211-.029c14.592-2.073 27.484-3.935 42.107-6.008M768.826 721.584c2.405-18.024 4.807-36.044 7.206-54.062M768.807 722.409c.322 0 .654-.01.976-.01 15.307-.121 30.611-.245 45.911-.372M730.8 767.585c.01-.06.03-.111.04-.171a640.634 640.634 0 0 0 10.66-65.042M730.8 767.586c15.347-1.459 29.014-1.016 44.4-.081M538.87 578.84c8.534-52.845-5.857-109-38.766-151.218M498.9 426.093c-.121.181-.231.362-.342.543a161.952 161.952 0 0 0-25.532 89.648c.05 3.6.227 7.2.533 10.8a161.864 161.864 0 0 0 41.986 95.273"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M525.758 602.258c-1.57-7.568-3.144-15.139-4.72-22.714-7.367-35.485-14.734-70.973-22.1-106.464M507.129 515.75l-17.6-24.968M507.562 513.8c3.6-9.691 6.371-17.581 9.984-27.273M513.832 545.338l-24.163-18.457M513.952 543.989c4.056-8.514 7.286-15.569 11.342-24.083M520.705 578.8c-7.659-4.136-13.979-7.659-20.339-13.6"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M521.018 579.584a.084.084 0 0 0 .02-.04l9.9-17.018M472.751 516.283c-8.423-7.125-23.438-13.1-33.985-16.374-.01 0-.02-.01-.03-.01"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M438.817 499.618c-.02.1-.04.191-.05.292a112.579 112.579 0 0 0 75.307 127.025M675.979 729.635c19.785-41.875 39.388-83.116 57.745-124.619.141-.312.283-.624.414-.946.079-.157.149-.318.211-.483.03-.06.06-.121.081-.171a2083.165 2083.165 0 0 0 19.643-45.951c.131-.312.262-.624.393-.946a.038.038 0 0 0 .009-.013c.002-.006.002-.011.002-.017a1514.727 1514.727 0 0 0 20.408-52.281c.04-.081.071-.161.101-.242.06-.171.121-.342.181-.5.111-.282.211-.564.312-.835a1244.567 1244.567 0 0 0 13.979-40.315h.01c.191-.584.381-1.167.563-1.751a1043.761 1043.761 0 0 0 11.201-36.652c.05-.181.1-.352.151-.533l.785-2.747a1021.437 1021.437 0 0 0 9.147-34.931c.02-.081.031-.151.051-.231a.057.057 0 0 0 .008-.013.033.033 0 0 0 .001-.017M811.406 385.475a44.416 44.416 0 0 0 31.328-23.318M810.822 385.575a25.367 25.367 0 0 1 19.952-24.347 25.36 25.36 0 0 1 11.225.093M810.622 385.601c-1.691-7.014-3.553-14.18-7.689-20.1-4.136-5.92-13.113-11.382-20.289-10.567M809.3 386.391a26.551 26.551 0 0 1-20.895-8.894 26.536 26.536 0 0 1-6.373-21.797"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M801.199 423.9c.01 0 .02.01.03.01a38.798 38.798 0 0 0 49.725-18.779c.07-.131.141-.272.2-.4"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M799.399 423.969c.362-.483.725-.946 1.107-1.409a36.676 36.676 0 0 1 1.661-1.932c11.926-13.123 31.067-19.463 48.437-15.669"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M800.799 423.929a3.706 3.706 0 0 0-.07-.322 13.1 13.1 0 0 0-.221-1.047c-3.784-16.867-19.252-32.1-36.058-36.008"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M801.484 423.345c-.03.01-.071.02-.101.03-.211.091-.433.161-.654.231-.435.151-.878.278-1.328.382-9.047 2.305-19.181-1.761-25.42-8.846-6.723-7.638-9.46-18.105-9.752-28.279M789.76 462.412c10.678 7.7 23.1 11.986 36.129 10.124a52.154 52.154 0 0 0 33.351-19.3M787.516 462.4c.091-.07.181-.141.272-.2.4-.312.8-.614 1.218-.906.332-.252.684-.493 1.026-.735 19.665-13.707 47.622-18.155 69.108-7.86M788.692 460.872c-4.307-9.239-15.317-17.43-24.415-22.019a45.55 45.55 0 0 0-10.909-3.844 46.077 46.077 0 0 0-18.839-.151"
        />
        <Path
          stroke="#e4e4e4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M734.328 435.532a57.085 57.085 0 0 0 22.482 20.339c9.651 4.982 20.59 7.427 30.976 6.33.242-.02.483-.05.725-.081M775.368 504.106a73.616 73.616 0 0 0 44.904 18.104 73.617 73.617 0 0 0 46.435-13.704l.1-.07M775.911 502.789a81.742 81.742 0 0 1 90.654 5.5M774.955 503.383a48.137 48.137 0 0 0-17.672-13.707 65.628 65.628 0 0 0-17.7-5.394c-13.264-2.063-28.158.805-39.208 8.443M774.251 503.975c-5.827 5.414-13.395 8.685-21.4 10.164a60.098 60.098 0 0 1-18.246.513 48.774 48.774 0 0 1-34.406-21.452M754.123 557.484a60.235 60.235 0 0 0 39.711 17.088 61.336 61.336 0 0 0 41.382-13.777M754.6 556.538a70.46 70.46 0 0 1 80.621 4.257M753.65 556.187a54.651 54.651 0 0 1-18.487 4c-17.028.8-35-5.5-45.538-18.054M753.65 556.186a45.335 45.335 0 0 0-12.1-10.013 70.971 70.971 0 0 0-18.668-7.487 54.46 54.46 0 0 0-33.623 2.546c-.07.03-.151.06-.221.091M734.208 603.526a47.47 47.47 0 0 0-13.737-13.969 46.57 46.57 0 0 0-11.714-5.676c-10.406-3.331-25.8-2.425-35.948 1.661M733.433 603.758c-6.511 4.428-14.572 5.847-22.462 4.982a43.076 43.076 0 0 1-10.627-2.586c-10.748-4.116-19.685-11.9-27.534-20.309M734.973 603.658a56.296 56.296 0 0 1 60.181 12.006l.121.121M733.554 604.724c.06.1.111.2.171.292 5.807 10.074 14.794 15.991 26.186 18.537 11.5 2.566 25.471-.916 35.092-7.729M409.392 230.67l-14.183-14.232M394.524 232.201l14.851-19.94M361.849 193.867l10-9.889M370.222 194.523l-7.8-10.669M399.404 186.667a20.834 20.834 0 0 1 9.235-4.262M404.586 190.181l-2.19-12.066M506.633 133.4l-7.814-28.415M518.729 136.218l5.688-9.233M493.885 136.231l-6.393-4.973M90.742 702.3l-15.61-14.228M83.12 711.809l-15.393-14.923M75.592 722.164l-14.04-15.309M422.786 809.994a117.347 117.347 0 0 0-26.425 14.879M408.629 803.01a116.946 116.946 0 0 0-25.5 11.967M395.806 796.248a63.931 63.931 0 0 0-21.706 11.091M142.274 485.822c3.09-5.112 10.066-6.9 15.82-5.294 5.754 1.606 10.383 5.931 13.938 10.731 7.049 9.518 10.718 22.132 7.3 33.472s-15.074 20.349-26.778 18.538c-6.4-.991-12.666-5.849-13.123-12.313-.548-7.769 8.091-14.06 15.777-12.805 7.686 1.255 13.518 8.191 15.539 15.712a28.544 28.544 0 0 1 .653 11.717 28.554 28.554 0 0 1-23.178 23.805c-6.426 1.155-13.01.083-19.511-.525-6.501-.608-13.358-.685-19.194 2.242-5.836 2.927-10.2 9.7-8.392 15.975M473.58 377.537c4.687-2.864 11.322-.223 14.065 4.536 2.743 4.759 2.277 10.8.353 15.941a32.4 32.4 0 0 1-30.939 20.447c-7.387-.333-14.632-3.257-21.981-2.434-12.27 1.373-20.989 12.62-26.172 23.826-3.226 6.975-5.716 14.676-4.483 22.261 1.233 7.585 7.168 14.843 14.835 15.361 7.667.518 15.06-8.148 11.705-15.062-1.263-2.6-4.017-4.611-6.9-4.358-2.883.253-5.4 3.269-4.591 6.047M892.342 342.237c-12.043 4.422-19.3 17.49-20.159 30.291-.859 12.801 3.569 25.363 8.927 37.021 8.817 19.184 20.3 37.073 28.688 56.449 8.388 19.376 13.606 41.032 8.979 61.632-1.608 7.158-4.512 14.246-9.718 19.414-5.206 5.168-13.027 8.1-20.089 6.107-5.089-1.432-9.536-5.663-10.311-10.892-.775-5.229 2.861-11 8.093-11.753 5.232-.753 10.609 4.666 9.124 9.739M758.22 316.7c-4.972-10.151-10.05-20.719-10.254-32.021-.204-11.302 5.942-23.563 16.815-26.653 10.286-2.923 21.291 2.916 31.831 1.117 9.746-1.664 17.212-9.492 22.938-17.552 2.876-4.048 5.55-8.358 6.776-13.17 1.226-4.812.834-10.239-2.04-14.289-2.874-4.05-8.54-6.238-13.092-4.254-4.552 1.984-6.663 8.572-3.451 12.36 2.011 2.372 5.335 3.153 8.442 3.3M187.028 725.129a98.215 98.215 0 0 0 58.571-29.236M167.319 436.885a57.143 57.143 0 0 1 9.207-53.959M331.524 333.239l-.463-9.472M317.229 334.664l-.945-10.419M298.768 336.557l-.474-9.945M284.569 336.557l-1.423-9M493.886 265.046l.474-13.26M454.6 267.97l9.911-2.5M450.674 320.467l-.92-9.474M416.682 324.17l-10.432 1.318M480.612 293.871l-6.639 1.377M415.332 366.877l1.42-9.945M376.446 359.254l-7.1-1.9M352.206 389.576l2.863-9.465M334.744 356l-7.706-4.517M314.746 393.819l2.834-8.054M345.651 420.858l-9-3.789M331.327 454.9l3.646-7.646M360.807 463.954l-6.157-3.315M284.01 428.87l4.14-8.583M284.48 386.901l-8.46-4.848M259.429 416.582l2.316-6.176M284.979 359.741l3.307-8.053M246.2 364.023l-8.442-5.34M219.278 389.2a15.138 15.138 0 0 0-3.882 7.9M218.763 433.105l-6.61-3.355M187.371 434.542l4.712-9.957M231.944 451.639c.044-3.003.884-5.94 2.433-8.513M226.756 480.091l-8.054-5.679M262.699 462.5l3.331-7.1M260.805 491.989l-7.126-5.655M356.905 498.467l3.641-7.179M449.369 601.294a35.444 35.444 0 0 0-9.945-8.525M440.629 602.573l6.761-10.333M413.85 583.771a24.694 24.694 0 0 1 4.736-9M419.532 582.823l-7.577-6.63"
        />
        <Path
          stroke="url(#h)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.019}
          d="M265.01 190.07c-9.826-16.649-27.572-29.192-46.893-29.851-19.321-.659-39.113 12.281-43.625 31.081-3.677 15.319 2.548 31.136 9.249 45.4 6.701 14.264 14.193 29.1 13.158 44.825a43.133 43.133 0 0 1-17.208 31.7 43.137 43.137 0 0 1-35.27 7.552c-12.569-2.815-24.7-14.216-22.267-26.864 1.512-7.848 8.385-13.91 16.036-16.221 5.364-1.621 11.483-1.579 16.256 1.357s7.651 9.2 5.631 14.432c-2.02 5.232-9.559 7.756-13.739 4.024"
        />
        <Path
          fill="#e4e4e4"
          d="M471.181 209.929c-8.5 13.89-15.161 28.836-23.76 42.668-8.521 13.703-16.821 27.383-26.611 40.25-9.011 11.84-18.57 24.235-31.206 32.424a50.805 50.805 0 0 1-20.427 8.066c-7.483 1.046-13.278-.879-20.374-2.678-9.5-2.408-14.516 10.249-6.538 15.508 14.444 9.519 36.2 4.928 50.457-2.5 15.386-8.017 27.064-21.452 37.493-34.973a284.876 284.876 0 0 0 28.963-45.162c8.085-16.052 15.683-32.972 18.686-50.786.663-3.93-4.4-6.553-6.683-2.817ZM277.529 330.661c-5.172 7.956-14.644 6.906-22.838 9.073a102.542 102.542 0 0 0-26.678 11.294c-16.273 9.811-30.769 22.545-39.153 39.979-17.427 36.237-7.578 84.618 30.11 103.665a73.47 73.47 0 0 0 30.838 8.087c10.671.334 23.63-1.516 31.818-8.817 3.244-2.892 3.668-8.359 1.547-11.985-2.377-4.063-6.783-5.241-11.17-4.546-3.666.581-7.013 2.146-10.635 3a41.417 41.417 0 0 1-10.868 1.022 50.644 50.644 0 0 1-20.225-4.71 52.497 52.497 0 0 1-28.345-34.2c-8.972-32.689 10.326-67.086 39.374-82.216a101.768 101.768 0 0 1 12.811-5.629c4.32-1.541 9.009-2.346 13.145-4.345 7.387-3.568 16.334-7.436 18.323-16.269a4.429 4.429 0 0 0-8.054-3.395v-.008Z"
          opacity={0.1}
        />
        <Path
          fill="#e4e4e4"
          d="M255.926 376.269c-2.133 3.079-2.9 6.866-4.012 10.411a274.49 274.49 0 0 0-3.488 12.043l-2.96 11.189c-1 3.8-1.589 8.448-3.221 12.012-5.466 11.94 13.913 16.707 14.713 3.985.23-3.663 1.686-7.572 2.534-11.13l2.91-12.2c.9-3.769 1.72-7.524 2.446-11.33.743-3.9 2.093-8.15 1.648-12.114-.63-5.6-7.211-7.71-10.57-2.863v-.003ZM227.492 515.563c1.388-2 1.191-4.134 1.594-6.407.076-.426.17-.848.281-1.267.482-1.294.21-1.167-.817.381.063.257 3.547-3.761 3.643-3.887 2.77-3.656.093-9.146-3.609-10.706-3.907-1.646-9.252.4-10.185 4.891a16.119 16.119 0 0 0-.174 5.366c-.028-.213-.035 1.286-.07 1.569a32.042 32.042 0 0 0-.215 2.145c-.173 3.174.035 6.525 2.485 8.826a4.567 4.567 0 0 0 5.653.54 4.577 4.577 0 0 0 1.414-1.451ZM473.975 710.667a52.417 52.417 0 0 0-24.492 7.872c-7.411 4.813-15.243 11.748-20.091 19.151-6.358 9.711 10.845 18.356 15.308 6.453 1.361-3.628 2.272-7.177 4.468-10.433a52.418 52.418 0 0 1 6.9-7.845 63.414 63.414 0 0 1 18.593-12.665 1.366 1.366 0 0 0 .601-1.522 1.367 1.367 0 0 0-1.287-1.011ZM320.427 766.052c-3.3-.33-7.125 2.166-9.957 3.745-3.677 2.051-6.7 5.4-9.619 8.366-6.91 7-9.91 14.857-11.184 24.5-.681 5.147 4.9 9.6 9.6 9.6 5.03 0 9.814-4.393 9.6-9.6a49.22 49.22 0 0 1 2.556-18.278c1.094-3.021 2.954-5.32 4.775-7.9 1.8-2.541 4.754-4.52 6.057-7.256a2.145 2.145 0 0 0-.779-2.872 2.154 2.154 0 0 0-1.042-.302l-.007-.003ZM498.27 429.531l-.6-.019a3.822 3.822 0 0 0-3.359 1.927c-3.537 7.2-6.487 14.681-10.223 21.776-3.662 6.957-5.168 14.437-6.466 22.157a192.696 192.696 0 0 0 6.76 94.385 221.27 221.27 0 0 0 8.776 22.453c3.458 7.666 7.17 15.851 12.605 22.314 6.611 7.861 21.816-.564 17.785-10.353-3.047-7.4-7.54-14.174-10.946-21.437a171.056 171.056 0 0 1-7.4-18.718 205.819 205.819 0 0 1-9.14-42.016 217.145 217.145 0 0 1-.509-44.2c.654-7.007 2.145-13.908 1.991-20.94-.168-7.662 1.829-15.1 3.879-22.422a3.859 3.859 0 0 0-1-3.785 3.302 3.302 0 0 0-2.152-1.121l-.001-.001ZM882.666 593.015c-4.049-.459-7.669.989-11.543 1.983-4.436 1.137-8.991 1.237-13.417 2.595a256.036 256.036 0 0 0-24.023 9.025 266.787 266.787 0 0 0-45.909 24.725 326.967 326.967 0 0 0-75.381 70.038c-6.13 7.876-11.972 15.958-17.369 24.355-2.6 4.042-5.094 8.15-7.56 12.272-2.751 4.6-6.11 9.355-7.06 14.7-1.665 9.364 9.367 17.669 16.923 9.851 5.894-6.1 8.968-15.155 13.317-22.421a304.639 304.639 0 0 1 13.716-20.911 300.04 300.04 0 0 1 31.763-37.236c23.472-23.488 50.691-42.529 79.843-58.318a306.218 306.218 0 0 1 24.456-11.873c4.191-1.806 7.892-4.168 11.926-6.191 4.452-2.233 9.077-2.79 13.069-5.95 2.971-2.352.157-6.312-2.751-6.642v-.002Z"
          opacity={0.1}
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={782.932}
        x2={782.246}
        y1={592.275}
        y2={825.602}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={colors.palette.main100} />
        <Stop offset={1} stopColor={colors.palette.main100} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={507.144}
        x2={505.69}
        y1={426.636}
        y2={621.911}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={colors.palette.main100} />
        <Stop offset={1} stopColor={colors.palette.main100} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={464.001}
        x2={463.742}
        y1={710.256}
        y2={833.492}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={colors.palette.main100} />
        <Stop offset={1} stopColor={colors.palette.main100} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={306.821}
        x2={306.668}
        y1={766.502}
        y2={832.809}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={colors.palette.main100} />
        <Stop offset={1} stopColor={colors.palette.main100} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={351.182}
        x2={350.461}
        y1={210.04}
        y2={516.81}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={colors.palette.main100} />
        <Stop offset={1} stopColor={colors.palette.main100} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={193.426}
        x2={192.956}
        y1={160.195}
        y2={320.939}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={colors.palette.main100} />
        <Stop offset={1} stopColor={colors.palette.main100} />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h960v960H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M38 103h885v755H38z" />
      </ClipPath>
    </Defs>
  </Svg>
)
