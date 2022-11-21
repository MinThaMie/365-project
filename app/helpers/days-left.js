import { helper } from '@ember/component/helper';

export default helper(function daysLeft(/*, named*/) {
  const startDate = new Date('2022-09-19');
  const today = Date.now();
  const amountPictures = Math.ceil(
    (today - startDate) / (1000 * 60 * 60 * 24)
  );
  return 365 - amountPictures;
});
