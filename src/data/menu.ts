interface Menu {
  text: string;
  link: string;
}

export const MenuAboutInstitute: Array<Menu> = [
  {
    text: 'об институте',
    link: '/about-university',
  },
  {
    text: 'преподаватели',
    link: '/teachers',
  },
  {
    text: 'отзывы',
    link: '/reviews',
  },
  {
    text: 'оплата обучения',
    link: '/tuition-fees',
  },
];
