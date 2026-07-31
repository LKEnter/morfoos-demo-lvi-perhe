/** Verified Unsplash source images used across the marketing site. */

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}`;
}

export const IMAGES = {
  sauna: unsplash("1774876549411-52e4eaff626e"),
  luxuryBathroom: unsplash("1733426107854-ee00a25d72a7"),
  excavator: unsplash("1630288214173-a119cf823388"),
  heatPump: unsplash("1776860155275-eee24bfb1dee"),
  familyWorkshop: unsplash("1759662232622-6c0754a379f4"),
} as const;
