import stls from '@/styles/components/programs/ProgramsTemplate.module.sass'
import cn from 'classnames'
import { TypeClassNames, TypeCategory } from '@/types/index'
import { getClassNames } from '@/helpers/index'
import {
  routeCourses,
  routeMBA,
  routeProfessions,
  routePrograms
} from '@/data/routes'
import { BtnDelta } from '@/components/btns'
import CardProgramTemplate from '@/components/cards/CardProgramTemplate'
import ProgramsQty from '@/components/general/ProgramsQty'

type TypeProgramsTemplate = {
  biggerTitle?: boolean
  withBtn?: boolean
  programs: any[]
  withQty?: boolean
  threerow?: boolean
  ofType?: TypeCategory
  classNames?: TypeClassNames
}

const ProgramsTemplate = ({
  biggerTitle = false,
  withBtn = false,
  programs = [],
  withQty = false,
  threerow = false,
  ofType,
  classNames = []
}: TypeProgramsTemplate) => {
  const container = getClassNames({ classNames })
  return (
    <div className={cn(stls.container, container)}>
      <hgroup>
        {biggerTitle ? (
          <div className={stls.heading}>
            <h2
              className={cn({
                [stls.title]: true,
                [stls.bold]: true
              })}>
              {ofType === 'course'
                ? 'Повышение квалификации'
                : ofType === 'profession'
                  ? 'Профессиональная переподготовка'
                  : ofType === 'mba'
                    ? 'MBA'
                    : 'Программы'}
            </h2>
            {withQty && (
              <div className={stls.phonetablet}>
                <ProgramsQty qty={programs.length} ofType={ofType} />
              </div>
            )}
          </div>
        ) : (
          <div className={stls.heading}>
            <h3 className={stls.title}>
              {ofType === 'course'
                ? 'Повышение квалификации'
                : ofType === 'profession'
                  ? 'Профессиональная переподготовка'
                  : ofType === 'mba'
                    ? 'MBA'
                    : 'Программы'}
            </h3>
            {withQty && (
              <div className={stls.phonetablet}>
                <ProgramsQty qty={programs.length} ofType={ofType} />
              </div>
            )}
          </div>
        )}

        {(withQty || ofType) && (
          <div className={stls.underheading}>
            {ofType && (
              <p className={stls.subTitle}>
                {ofType === 'course'
                  ? 'Короткие программы, чтобы изучить один конкретный навык'
                  : ofType === 'profession'
                    ? 'Длинные программы для полного погружения в направление'
                    : ofType === 'mba'
                      ? 'MBA'
                      : ''}
              </p>
            )}
            {withQty && (
              <div className={stls.laptopdesktop}>
                <ProgramsQty
                  qty={programs.length}
                  ofType={ofType}
                  dye='bgalpha'
                />
              </div>
            )}
          </div>
        )}
      </hgroup>

      <div
        className={cn({
          [stls.programs]: true,
          [stls.threerow]: threerow
        })}>
        {programs.map((program, idx) => (
          <CardProgramTemplate
            key={program.title + idx}
            program={program}
            threerow={threerow}
            type={ofType}
          />
        ))}
      </div>
      {withBtn && (
        <div className={stls.btn}>
        </div>
      )}
    </div>
  )
}

export default ProgramsTemplate
