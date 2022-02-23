import addOptionalZeroToHours from '@/helpers/addOptionalZeroToHours'
import addOptionalZeroToMinutes from '@/helpers/addOptionalZeroToMinutes'
import calculateClosestAdmission from '@/helpers/calculateClosestAdmission'
import closeFieldsTooltipOnOuterClick from '@/helpers/closeFieldsTooltipOnOuterClick'
import convertMdToHtml from '@/helpers/convertMdToHtml'
import fetchPrograms from '@/helpers/fetchPrograms'
import fetchProgramsPaths from '@/helpers/fetchProgramsPaths'
import fetchStudyFieldsPaths from '@/helpers/fetchStudyFieldsPaths'
import fetchReviews from '@/helpers/fetchReviews'
import fetchTeachers from '@/helpers/fetchTeachers'
import fetchWebinars from '@/helpers/fetchWebinars'
import filterProgramsByStudyField from '@/helpers/filterProgramsByStudyField'
import filterProgramsByType from '@/helpers/filterProgramsByType'
import getCasedRuMonthString from '@/helpers/getCasedRuMonthString'
import getCasedRuYearString from '@/helpers/getCasedRuYearString'
import getCasesRuCourseString from '@/helpers/getCasesRuCourseString'
import getCasesRuProfessionString from '@/helpers/getCasesRuProfessionString'
import getClassNames from '@/helpers/getClassNames'
import getImageHeight from '@/helpers/getImageHeight'
import getListItemsInnerHtml from '@/helpers/getListItemsInnerHtml'
import getParagraphInnerHtml from '@/helpers/getParagraphInnerHtml'
import getProgram from '@/helpers/getProgram'
import getRuDaysOfWeek from '@/helpers/getRuDaysOfWeek'
import getStudyFields from '@/helpers/getStudyFields'
import getStudyFieldsLabels from '@/helpers/getStudyFieldsLabels'
import getStudyFieldsSlugs from '@/helpers/getStudyFieldsSlugs'
import getThreeLettersRuMonths from '@/helpers/getThreeLettersRuMonths'
import handleGetStaticPathsPrograms from '@/helpers/handleGetStaticPathsPrograms'
import handleGetStaticPathsStudyFields from '@/helpers/handleGetStaticPathsStudyFields'
import handleGetStaticProps from '@/helpers/handleGetStaticProps'
import handleSwipedEvt from '@/helpers/handleSwipedEvt'
import removeDuplicates from '@/helpers/removeDuplicates'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'

export {
  addOptionalZeroToHours,
  addOptionalZeroToMinutes,
  calculateClosestAdmission,
  closeFieldsTooltipOnOuterClick,
  getStudyFields,
  convertMdToHtml,
  fetchPrograms,
  fetchProgramsPaths,
  fetchStudyFieldsPaths,
  fetchReviews,
  fetchTeachers,
  fetchWebinars,
  filterProgramsByStudyField,
  filterProgramsByType,
  getCasedRuMonthString,
  getCasedRuYearString,
  getCasesRuCourseString,
  getCasesRuProfessionString,
  getClassNames,
  getImageHeight,
  getListItemsInnerHtml,
  getParagraphInnerHtml,
  getProgram,
  getRuDaysOfWeek,
  getStudyFieldsLabels,
  getStudyFieldsSlugs,
  getThreeLettersRuMonths,
  handleGetStaticPathsPrograms,
  handleGetStaticPathsStudyFields,
  handleGetStaticProps,
  handleSwipedEvt,
  removeDuplicates,
  toNumberWithSpaces
}
