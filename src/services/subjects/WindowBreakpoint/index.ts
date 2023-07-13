import { useWindowSize } from "../";

type BreakpointType = 'mobile' | 'tablet' | 'laptop' | 'desktop' ;

const breakpoints   = {
    max_width_mobile: 540,
    max_width_tablet: 768,
    max_width_laptop: 1024,
};


export const useWindowBreakpoint = (): BreakpointType => {
    const {width} = useWindowSize();

    const breakpoint =
        width < breakpoints.max_width_mobile
            ? 'mobile'
            : width < breakpoints.max_width_tablet
                ? 'tablet'
                : width < breakpoints.max_width_laptop
                    ? 'laptop'
                    : 'desktop'
    ;

    return breakpoint;
}



