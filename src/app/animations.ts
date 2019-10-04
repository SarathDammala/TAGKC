import {trigger, state, animate, style, transition} from '@angular/animations';

export const animations = [
    trigger('renderAnim', [
        state('in', style({
                            opacity: 1
                          })),
        transition('void => *', [style({
                                        opacity: 0.01
                                      }),
                                animate(1500)])
        ]),

        trigger('galleryPanelImageAnim', [
          state('in', style({
                              opacity: 1
                            })),
          state('out', style({
                              opacity: 0.01
                            })),
          transition('in => out', animate('.6s 100ms ease-in')),
          transition('out => in', animate('.6s 100ms ease-in'))
          ])
];
