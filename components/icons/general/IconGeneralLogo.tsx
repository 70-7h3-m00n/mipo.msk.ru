import stls from '@/styles/components/icons/general/IconGeneralLogo.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors, companyName } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralLogoProps = TPropClassNames & TPropColor

const IconGeneralLogo = ({ classNames, color }: TIconGeneralLogoProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg
        viewBox='0 0 1000 1498'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>{companyName}</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M975.362 218.704H24.7041V766.838C24.7041 1053.65 186.995 1315.76 443.733 1443.61L501.216 1472.23L557.642 1444C813.662 1315.89 975.362 1054.16 975.362 767.881V218.704ZM501.242 1498.72L433.167 1464.83C168.379 1332.97 1 1062.64 1 766.838V195H999.067V767.881C999.067 1063.14 832.296 1333.07 568.25 1465.19L501.242 1498.72Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M607.085 567.667H520.915C499.282 567.667 481.746 585.204 481.746 606.836V693.007H567.917C589.549 693.007 607.085 675.47 607.085 653.838V567.667ZM520.915 552C490.63 552 466.079 576.551 466.079 606.836V693.007H317.238V653.838C317.238 649.512 320.746 646.004 325.072 646.004H356.094C360.593 646.004 364.241 649.652 364.241 654.151V664.022H379.908V654.151C379.908 640.999 369.246 630.337 356.094 630.337H325.072C312.093 630.337 301.571 640.859 301.571 653.838V708.674H466.079V865.348H362.674V779.177C362.674 748.892 338.123 724.341 307.838 724.341H206V826.179C206 856.464 230.551 881.015 260.836 881.015H347.007V1022.02H307.838C303.512 1022.02 300.004 1018.51 300.004 1014.19V983.167C300.004 978.667 303.652 975.02 308.151 975.02H318.022V959.352H308.151C294.999 959.352 284.337 970.014 284.337 983.167V1014.19C284.337 1027.17 294.859 1037.69 307.838 1037.69H362.674V881.015H519.348V984.42H433.177C402.892 984.42 378.341 1008.97 378.341 1039.26V1141.09H480.179C510.464 1141.09 535.015 1116.54 535.015 1086.26V1000.09H677.589V1039.26C677.589 1043.58 674.081 1047.09 669.755 1047.09H638.733C634.234 1047.09 630.586 1043.44 630.586 1038.94V1029.07H614.919V1038.94C614.919 1052.09 625.581 1062.76 638.733 1062.76H669.755C682.734 1062.76 693.256 1052.24 693.256 1039.26V984.42H535.015V827.746H638.42V913.917C638.42 944.202 662.971 968.753 693.256 968.753H795.094V866.915C795.094 836.63 770.543 812.079 740.258 812.079H654.087V671.072H693.256C697.582 671.072 701.09 674.579 701.09 678.906V709.927C701.09 714.427 697.442 718.074 692.943 718.074H683.072V733.742H692.943C706.095 733.742 716.757 723.08 716.757 709.927V678.906C716.757 665.927 706.235 655.405 693.256 655.405H638.42V812.079H481.746V708.674H567.917C598.202 708.674 622.753 684.123 622.753 653.838V552H520.915ZM481.746 827.746H519.348V865.348H481.746V827.746ZM347.007 779.177V865.348H260.836C239.204 865.348 221.667 847.811 221.667 826.179V740.009H307.838C329.47 740.009 347.007 757.545 347.007 779.177ZM394.009 1125.43H480.179C501.811 1125.43 519.348 1107.89 519.348 1086.26V1000.09H433.177C411.545 1000.09 394.009 1017.62 394.009 1039.26V1125.43ZM779.427 866.915V953.085H693.256C671.624 953.085 654.087 935.549 654.087 913.917V827.746H740.258C761.89 827.746 779.427 845.282 779.427 866.915Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M359.611 668.651V654.151C359.611 652.209 358.036 650.634 356.094 650.634H325.072C323.302 650.634 321.868 652.068 321.868 653.838V688.377H461.449V606.836C461.449 573.994 488.073 547.371 520.915 547.371H627.382V653.838C627.382 686.68 600.758 713.303 567.917 713.303H486.375V807.449H633.791V650.776H693.256C708.792 650.776 721.386 663.37 721.386 678.906V709.927C721.386 725.636 708.652 738.371 692.943 738.371H678.443V713.445H692.943C694.885 713.445 696.46 711.87 696.46 709.927V678.906C696.46 677.136 695.026 675.701 693.256 675.701H658.717V807.449H740.258C773.1 807.449 799.723 834.073 799.723 866.915V973.382H693.256C660.414 973.382 633.791 946.758 633.791 913.917V832.375H539.644V979.791H697.885V1039.26C697.885 1054.79 685.291 1067.39 669.755 1067.39H638.733C623.024 1067.39 610.29 1054.65 610.29 1038.94V1024.44H635.216V1038.94C635.216 1040.89 636.79 1042.46 638.733 1042.46H669.755C671.525 1042.46 672.959 1041.03 672.959 1039.26V1004.72H539.644V1086.26C539.644 1119.1 513.021 1145.72 480.179 1145.72H373.712V1039.26C373.712 1006.41 400.336 979.791 433.177 979.791H514.719V885.644H367.303V1042.32H307.838C292.302 1042.32 279.708 1029.72 279.708 1014.19V983.167C279.708 967.458 292.442 954.723 308.151 954.723H322.651V979.649H308.151C306.209 979.649 304.634 981.224 304.634 983.167V1014.19C304.634 1015.96 306.068 1017.39 307.838 1017.39H342.377V885.644H260.836C227.994 885.644 201.371 859.021 201.371 826.179V719.712H307.838C340.68 719.712 367.303 746.335 367.303 779.177V860.719H461.449V713.303H296.942V653.838C296.942 638.302 309.536 625.708 325.072 625.708H356.094C371.803 625.708 384.537 638.442 384.537 654.151V668.651H359.611ZM466.079 708.674V865.348H362.674V779.177C362.674 748.892 338.123 724.341 307.838 724.341H206V826.179C206 856.464 230.551 881.015 260.836 881.015H347.007V1022.02H307.838C303.512 1022.02 300.004 1018.51 300.004 1014.19V983.167C300.004 978.667 303.652 975.02 308.151 975.02H318.022V959.352H308.151C294.999 959.352 284.337 970.014 284.337 983.167V1014.19C284.337 1027.17 294.859 1037.69 307.838 1037.69H362.674V881.015H519.348V984.42H433.177C402.892 984.42 378.341 1008.97 378.341 1039.26V1141.09H480.179C510.464 1141.09 535.015 1116.54 535.015 1086.26V1000.09H677.589V1039.26C677.589 1043.58 674.081 1047.09 669.755 1047.09H638.733C634.234 1047.09 630.586 1043.44 630.586 1038.94V1029.07H614.919V1038.94C614.919 1052.09 625.581 1062.76 638.733 1062.76H669.755C682.734 1062.76 693.256 1052.24 693.256 1039.26V984.42H535.015V827.746H638.42V913.917C638.42 944.202 662.971 968.753 693.256 968.753H795.094V866.915C795.094 836.63 770.543 812.079 740.258 812.079H654.087V671.072H693.256C697.582 671.072 701.09 674.579 701.09 678.906V709.927C701.09 714.427 697.442 718.074 692.943 718.074H683.072V733.742H692.943C706.095 733.742 716.757 723.08 716.757 709.927V678.906C716.757 665.927 706.235 655.405 693.256 655.405H638.42V812.079H481.746V708.674H567.917C598.202 708.674 622.753 684.123 622.753 653.838V552H520.915C490.63 552 466.079 576.551 466.079 606.836V693.007H317.238V653.838C317.238 649.512 320.746 646.004 325.072 646.004H356.094C360.593 646.004 364.241 649.652 364.241 654.151V664.022H379.908V654.151C379.908 640.999 369.246 630.337 356.094 630.337H325.072C312.093 630.337 301.571 640.859 301.571 653.838V708.674H466.079ZM602.456 572.297H520.915C501.839 572.297 486.375 587.76 486.375 606.836V688.377H567.917C586.992 688.377 602.456 672.913 602.456 653.838V572.297ZM481.746 827.746H519.348V865.348H481.746V827.746ZM486.375 860.719H514.719V832.375H486.375V860.719ZM342.377 860.719V779.177C342.377 760.102 326.913 744.638 307.838 744.638H226.297V826.179C226.297 845.255 241.76 860.719 260.836 860.719H342.377ZM347.007 779.177C347.007 757.545 329.47 740.009 307.838 740.009H221.667V826.179C221.667 847.811 239.204 865.348 260.836 865.348H347.007V779.177ZM398.638 1120.8H480.179C499.255 1120.8 514.719 1105.33 514.719 1086.26V1004.72H433.177C414.102 1004.72 398.638 1020.18 398.638 1039.26V1120.8ZM774.797 948.456V866.915C774.797 847.839 759.333 832.375 740.258 832.375H658.717V913.917C658.717 932.992 674.18 948.456 693.256 948.456H774.797ZM779.427 953.085H693.256C671.624 953.085 654.087 935.549 654.087 913.917V827.746H740.258C761.89 827.746 779.427 845.282 779.427 866.915V953.085ZM607.085 567.667V653.838C607.085 675.47 589.549 693.007 567.917 693.007H481.746V606.836C481.746 585.204 499.282 567.667 520.915 567.667H607.085ZM394.009 1125.43V1039.26C394.009 1017.62 411.545 1000.09 433.177 1000.09H519.348V1086.26C519.348 1107.89 501.811 1125.43 480.179 1125.43H394.009Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M601.389 23.7041H399.28V194.623H601.389V23.7041ZM375.576 0V218.327H625.093V0H375.576Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M375.573 121.017H274.519V194.624H375.573V121.017ZM250.814 97.3125V218.328H399.277V97.3125H250.814Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M726.149 121.017H625.095V194.624H726.149V121.017ZM601.391 97.3125V218.328H749.853V97.3125H601.391Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M998.067 317.852H0V294.148H998.067V317.852Z'
          fill={color || colors.alpha}
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralLogo