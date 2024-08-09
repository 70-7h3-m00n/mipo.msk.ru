import { ContentDiplomaEducation } from '@/components/ContentDiplomaEducation/ContentDiplomaEducation';
import { SliderTeachers } from '@/components/SliderTeachers/SliderTeachers';
import { useAppSelector } from '@/state/hooks';

export const TeachersMentors = () => {
  const { teacherData } = useAppSelector(state => state.teacherReducer);

  if (!teacherData.length) return <></>;

  return (
    <section className={'container'}>
      <SliderTeachers list={teacherData} />

      <ContentDiplomaEducation />
    </section>
  );
};
