import Svg, {
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';

import { Palette } from '@/constants/design-tokens';
import type { IconProps } from '@/components/icons/types';

/**
 * Vector icons exported from Figma (file GkXS0MMa1wHcQWOWNaMQLj). Each keeps its
 * native viewBox so the path geometry stays exact; `size` scales uniformly and
 * `color` drives the stroke/fill. Stroke widths come straight from Figma.
 */

const WHITE = Palette.white100;

export function SparkleIcon({ size = 18, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 10.5 12" fill="none" opacity={opacity}>
      <G fill={color}>
        <Path d="M6.54221 1.94968C7.76737 2.32016 8.09785 2.70495 8.4344 3.74049C8.45873 3.81585 8.55344 3.79219 8.56648 3.74654C8.84714 2.78224 9.37051 2.23105 10.4604 1.96288C10.5091 1.95078 10.5189 1.84956 10.4555 1.83196C9.23728 1.49063 8.80861 0.958698 8.5688 0.0362027C8.55605 -0.012205 8.46395 -0.0119299 8.45004 0.0362027C8.12855 1.16361 7.53537 1.59927 6.55554 1.83691C6.50456 1.84929 6.49153 1.9351 6.54163 1.95023Z" />
        <Path d="M10.4555 10.0423C9.23728 9.70095 8.80861 9.16902 8.5688 8.24652C8.55605 8.19811 8.46395 8.19839 8.45004 8.24652C8.12855 9.37392 7.53537 9.80959 6.55554 10.0472C6.50456 10.0596 6.49153 10.1454 6.54163 10.1605C7.76679 10.531 8.09727 10.9158 8.43383 11.9514C8.45815 12.0267 8.55287 12.0031 8.5659 11.9574C8.84656 10.9931 9.36993 10.4419 10.4598 10.1738C10.5085 10.1616 10.5183 10.0604 10.4549 10.0428Z" />
        <Path d="M7.75521 5.88252C5.44536 5.35114 4.66682 4.24877 4.02672 2.33474C3.99573 2.24233 3.87437 2.23985 3.84599 2.33309C3.31364 4.09419 2.37058 5.42265 0.0720319 5.88252C-0.0278926 5.9026 -0.0215206 6.08688 0.076666 6.11356C2.55653 6.78687 3.1555 7.70606 3.81297 9.64044C3.8625 9.78621 4.02209 9.74028 4.04787 9.65172C4.59325 7.77702 5.63333 6.65155 7.75086 6.12511C7.90205 6.08743 7.88004 5.91113 7.75521 5.88252Z" />
      </G>
    </Svg>
  );
}

export function PencilIcon({ size = 18, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14.5376 14.5376" fill="none" opacity={opacity}>
      <Path
        d="M7.55 3.05009L11.4875 6.98759M4.50477 13.7376H1.3625C1.21332 13.7376 1.07024 13.6783 0.964753 13.5728C0.859263 13.4674 0.8 13.3243 0.8 13.1751V10.0328C0.800069 9.88384 0.859241 9.74097 0.964531 9.63556L9.63547 0.964622C9.74095 0.859213 9.88397 0.8 10.0331 0.8C10.1822 0.8 10.3252 0.859213 10.4307 0.964622L13.573 4.10478C13.6784 4.21026 13.7376 4.35328 13.7376 4.5024C13.7376 4.65152 13.6784 4.79453 13.573 4.90001L4.90203 13.5731C4.79662 13.6783 4.65375 13.7375 4.50477 13.7376Z"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SettingsIcon({ size = 18, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 13.975 11.725" fill="none" opacity={opacity}>
      <Path
        d="M10.925 2.4875H13.175M0.8 2.4875H8.675M6.425 9.2375H13.175M0.8 9.2375H4.175M8.675 0.8V4.175M4.175 7.55V10.925"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SettingsSmallIcon({ size = 12, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9.65 8.15" fill="none" opacity={opacity}>
      <Path
        d="M7.45 1.825H8.95M0.7 1.825H5.95M4.45 6.325H8.95M0.7 6.325H2.95M5.95 0.7V2.95M2.95 5.2V7.45"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BellIcon({ size = 18, color = Palette.white80, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 13.9696 15.1" fill="none" opacity={opacity}>
      <Path
        d="M4.73412 12.05C4.73412 12.6467 4.97117 13.219 5.39313 13.641C5.81508 14.0629 6.38738 14.3 6.98412 14.3C7.58085 14.3 8.15315 14.0629 8.57511 13.641C8.99706 13.219 9.23412 12.6467 9.23412 12.05M1.92162 5.8625C1.92162 4.51984 2.45499 3.23217 3.40439 2.28277C4.35379 1.33337 5.64146 0.8 6.98412 0.8C8.32678 0.8 9.61444 1.33337 10.5638 2.28277C11.5132 3.23217 12.0466 4.51984 12.0466 5.8625C12.0466 8.38109 12.6302 10.4047 13.0943 11.2063C13.1436 11.2916 13.1695 11.3884 13.1696 11.487C13.1697 11.5856 13.1439 11.6824 13.0948 11.7679C13.0456 11.8533 12.9749 11.9244 12.8897 11.9739C12.8044 12.0234 12.7077 12.0497 12.6091 12.05H1.35912C1.26066 12.0494 1.16409 12.023 1.07905 11.9734C0.994013 11.9238 0.923483 11.8527 0.874514 11.7673C0.825545 11.6819 0.799851 11.5851 0.800001 11.4867C0.80015 11.3882 0.826138 11.2915 0.875366 11.2063C1.33873 10.4047 1.92162 8.38039 1.92162 5.8625Z"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ThreeLinesIcon({ size = 18, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 4.6 10.6" fill="none" opacity={opacity}>
      <Path
        d="M0.8 5.3L3.8 5.30044M0.8 9.8H3.8M0.8 0.8L3.8 0.806729"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function NavigationIcon({ size = 16, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 19.7581 19.7581" fill="none" opacity={opacity}>
      <Path
        d="M9.28536 10.4727L0.961104 10.1397C-0.0899807 10.0977 -0.371851 8.66975 0.584418 8.23146L18.3379 0.0944588C19.1807 -0.291821 20.0499 0.577388 19.6636 1.42018L11.5266 19.1736C11.0883 20.1299 9.66037 19.848 9.61833 18.797L9.28536 10.4727Z"
        fill={color}
      />
    </Svg>
  );
}

export function ArrowUpRightIcon({ size = 12, color = Palette.secondary30, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 17.8 17.8" fill="none" opacity={opacity}>
      <Path
        d="M5.9 11.9L11.9 5.9M11.9 10.775V5.9H7.025"
        stroke={color}
        strokeWidth={0.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function EyeIcon({ size = 18, color = Palette.white80, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16.2 13.2" fill="none" opacity={opacity}>
      <Path
        d="M15.6 6.6C15.6 8.475 13.35 12.6 8.1 12.6C2.85 12.6 0.6 8.475 0.6 6.6C0.6 4.725 2.85 0.6 8.1 0.6C13.35 0.6 15.6 4.725 15.6 6.6Z"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <Path
        d="M10.3499 6.6C10.3499 7.84264 9.34257 8.85 8.09993 8.85C6.85729 8.85 5.84993 7.84264 5.84993 6.6C5.84993 5.35736 6.85729 4.35 8.09993 4.35C9.34257 4.35 10.3499 5.35736 10.3499 6.6Z"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function CardsIcon({ size = 18, color = Palette.white80, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16.95 14.7" fill="none" opacity={opacity}>
      <Path
        d="M13.3407 3.6L13.8968 3.77289C15.2534 4.19471 15.9318 4.40562 16.2192 4.9487C16.5066 5.49177 16.2909 6.15495 15.8594 7.48127L14.4865 11.7016C14.055 13.0279 13.8393 13.6911 13.2838 13.9721C12.7283 14.2531 12.0499 14.0422 10.6933 13.6204L4.21795 11.6071C3.83623 11.4884 2.75572 11.1974 2.475 11.1M13.35 3.6C13.35 5.1 13.35 6.6 13.35 8.1C13.35 9.51422 13.35 10.2213 12.9107 10.6607C12.4713 11.1 11.7642 11.1 10.35 11.1C8.1 11.1 5.85 11.1 3.6 11.1C2.18579 11.1 1.47868 11.1 1.03934 10.6607C0.600002 10.2213 0.600002 9.51422 0.600002 8.1C0.600002 6.6 0.600002 5.1 0.600002 3.6C0.600002 2.18579 0.600002 1.47868 1.03934 1.03934C1.47868 0.600002 2.18579 0.600002 3.6 0.600002C5.85 0.600002 8.1 0.600002 10.35 0.600002C11.7642 0.600002 12.4713 0.600002 12.9107 1.03934C13.35 1.47868 13.35 2.18579 13.35 3.6Z"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function ShareIcon({ size = 18, color = Palette.white80, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14.7 14.7" fill="none" opacity={opacity}>
      <Path
        d="M14.1 7.35V10.5C14.1 11.7601 14.1 12.3902 13.8548 12.8715C13.639 13.2948 13.2948 13.639 12.8715 13.8548C12.3902 14.1 11.7601 14.1 10.5 14.1H4.2C2.93988 14.1 2.30982 14.1 1.82852 13.8548C1.40516 13.639 1.06095 13.2948 0.845236 12.8715C0.6 12.3902 0.6 11.7601 0.6 10.5V7.35M4.35 3.6L7.35 0.6L10.35 3.6M7.35 0.6V9.6"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** Blue gradient verified badge (star burst + check). */
export function VerifiedBadgeIcon({ size = 12, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 11.8066 11.3693" fill="none" opacity={opacity}>
      <Defs>
        <LinearGradient id="verifiedGrad" x1="10.8018" y1="1.96776" x2="0.744317" y2="8.74562" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor={Palette.blue40} />
          <Stop offset="0.286424" stopColor={Palette.blue40} />
          <Stop offset="0.510593" stopColor={Palette.blue5} />
          <Stop offset="0.639826" stopColor={Palette.blue40} />
          <Stop offset="1" stopColor={Palette.blue40} />
        </LinearGradient>
      </Defs>
      <Path
        d="M5.89468 0.817069L7.72966 0L8.73814 1.77362L10.6813 2.17728L10.4649 4.17498L11.8066 5.68458L10.4796 7.1893L10.6863 9.20697L8.71842 9.6155L7.72966 11.3693L5.89468 10.5373L4.08438 11.3693L3.05618 9.61063L1.11795 9.20209L1.30986 7.17436L0 5.68458L1.33439 4.19495L1.12773 2.17225L3.08568 1.77865L4.08438 0.0199707L5.89468 0.817069Z"
        fill="url(#verifiedGrad)"
      />
      <Path
        d="M3.55426 5.94781L5.30339 7.69693L8.14571 4.41733"
        stroke={WHITE}
        strokeWidth={0.85}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

export function GreenDotIcon({ size = 6, color = Palette.secondary30, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 6 6" fill="none" opacity={opacity}>
      <Path
        d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
        fill={color}
      />
    </Svg>
  );
}

export function ChevronRightIcon({ size = 16, color = Palette.white60, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none" opacity={opacity}>
      <Path
        d="M6 4L10 8L6 12"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/* ---- Bottom navbar icons ---- */

export function NavSearchIcon({ size = 22, color = Palette.white50, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18.5 18.5" fill="none" opacity={opacity}>
      <Path
        d="M12.7365 12.7365L17.5 17.5M14.75 7.875C14.75 11.672 11.672 14.75 7.875 14.75C4.07804 14.75 1 11.672 1 7.875C1 4.07804 4.07804 1 7.875 1C11.672 1 14.75 4.07804 14.75 7.875Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function NavUsersIcon({ size = 22, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={opacity}>
      {/* back person (white 0.2) */}
      <Path
        d="M11.1581 18.9165C11.0824 18.9629 10.9877 18.9907 10.9025 18.9907H10.8931C8.84817 18.6752 6.82223 18.5082 4.83415 18.4804C4.82468 18.137 4.72055 17.8123 4.53121 17.5153C3.85905 16.5039 2.99755 15.6317 1.99404 14.9358C1.68163 14.7223 1.35975 14.5182 1.01894 14.3419C1.01894 14.3419 1.01262 14.3388 1 14.3326C1.1136 14.2027 1.21774 14.0635 1.32188 13.9243C2.02244 12.95 2.42952 11.7716 2.42952 10.5282C2.42952 9.2848 2.02244 8.08779 1.32188 7.13205C2.13604 6.42684 3.19635 6 4.35133 6C6.89796 6 8.97125 8.02284 8.97125 10.5282C8.97125 12.4768 7.6932 14.1285 5.92286 14.7595C6.75596 14.9079 7.56066 15.1677 8.29909 15.5667C9.51087 16.207 10.5428 17.1442 11.3001 18.2762C11.4421 18.4896 11.3759 18.7773 11.1581 18.9165Z"
        fill={color}
        fillOpacity={0.2}
      />
      {/* front person (white 0.5) */}
      <Path
        d="M22.9632 18.2762C22.2153 17.1442 21.1739 16.207 19.9716 15.5667C19.2332 15.1677 18.419 14.9172 17.5954 14.7595C19.3657 14.1285 20.6343 12.4768 20.6343 10.5282C20.6343 8.02284 18.5705 6 16.0238 6C13.4772 6 11.4039 8.02284 11.4039 10.5282C11.4039 12.4861 12.6725 14.1285 14.4429 14.7595C13.6192 14.9079 12.8051 15.1677 12.0666 15.5667C10.8548 16.207 9.82294 17.1442 9.07504 18.2762C8.93303 18.4896 8.9993 18.7773 9.21705 18.9165C9.30225 18.9722 9.38745 18.9814 9.48212 18.9814C9.50106 18.9814 9.51999 18.9814 9.53893 18.9814C9.55786 18.9814 9.58626 18.9814 9.60519 18.9814C13.7896 18.3041 18.1161 18.3133 22.575 19C22.575 19 22.575 19 22.5845 19C22.6697 19 22.7644 18.9722 22.8401 18.9258C23.0579 18.7866 23.1241 18.4989 22.9821 18.2855Z"
        fill={color}
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export function NavPaperPlaneIcon({ size = 22, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22" fill="none" opacity={opacity}>
      <Path
        d="M19.894 3.10266C20.0466 3.25436 20.1558 3.44404 20.2104 3.65209C20.2651 3.86014 20.2631 4.079 20.2047 4.28602L16.366 18.3675C16.3103 18.5689 16.2037 18.7526 16.0564 18.901C15.9194 19.0364 15.752 19.1371 15.5682 19.1947C15.3843 19.2523 15.1894 19.2651 14.9995 19.2321C14.8097 19.199 14.6306 19.1211 14.4771 19.0047C14.3235 18.8884 14.2001 18.737 14.117 18.5633L11.8599 13.4263C11.8322 13.3705 11.8225 13.3075 11.8321 13.246C11.8416 13.1845 11.87 13.1275 11.9132 13.0827L15.2023 8.65723C15.2609 8.59884 15.307 8.52903 15.3375 8.45211C15.3681 8.3752 15.3824 8.29283 15.3798 8.21012C15.3771 8.12742 15.3575 8.04614 15.3221 7.97134C15.2867 7.89654 15.2363 7.82981 15.174 7.7753C15.0545 7.67523 14.9016 7.62396 14.7459 7.63178C14.5902 7.63959 14.4431 7.70591 14.3343 7.81745L9.92137 11.0898C9.8767 11.1344 9.81915 11.1639 9.7568 11.1742C9.69446 11.1844 9.63048 11.1749 9.57386 11.1469L4.4346 8.89145C4.21366 8.78531 4.03027 8.61449 3.90878 8.4017C3.78729 8.18891 3.73346 7.94421 3.75443 7.70011C3.7754 7.45601 3.87018 7.22406 4.02619 7.03508C4.1822 6.8461 4.39204 6.70903 4.62784 6.64209L18.7148 2.79481C18.921 2.73703 19.1389 2.73509 19.3461 2.78919C19.5533 2.84328 19.7424 2.95147 19.894 3.10266Z"
        fill={color}
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export function NavConversationsIcon({ size = 22, color = WHITE, opacity = 1 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" opacity={opacity}>
      <Path
        d="M22.5 9.40361C22.5 14.0448 17.799 17.8072 12 17.8072C11.2579 17.8072 10.5339 17.7456 9.83529 17.6284C9.33493 17.5445 8.82487 17.5492 8.38734 17.8061C7.68649 18.2175 6.68378 18.8702 5.43768 18.9831C5.28972 18.9965 5.20748 18.8264 5.29932 18.7097C6.14938 17.6287 6.67876 16.6587 6.3008 16.4628C3.41172 14.9656 1.5 12.3633 1.5 9.40361C1.5 4.76243 6.20101 1 12 1C17.799 1 22.5 4.76243 22.5 9.40361Z"
        fill={color}
        fillOpacity={0.5}
      />
      <Path
        d="M19.7793 14.5C20.2039 15.1825 20.4434 15.9499 20.4434 16.7617C20.4433 18.5702 19.2599 20.1603 17.4717 21.0752C17.2514 21.1879 17.5288 21.72 18.001 22.333C18.0919 22.4511 18.0089 22.62 17.8613 22.5986C17.2889 22.5158 16.8051 22.2596 16.4258 22.04C15.9922 21.7891 15.4997 21.7648 15.0029 21.8291C14.6582 21.8738 14.3041 21.8975 13.9434 21.8975C12.8837 21.8975 11.8839 21.6952 11 21.3398C15.4585 20.8095 18.999 18.0367 19.7793 14.5Z"
        fill={color}
        fillOpacity={0.2}
      />
    </Svg>
  );
}
