import { DISCIPLINES } from "../data/disciplines.js";

export function computeOverallProgress(getState) {
  const totalTopics = DISCIPLINES.reduce((sum, d) => sum + d.topics.length, 0);
  let done = 0;
  DISCIPLINES.forEach((d) => {
    d.topics.forEach((_, i) => {
      const s = getState(d.id, i).status;
      if (s === "2" || s === "4") done++;
    });
  });
  return totalTopics === 0 ? 0 : Math.round((done / totalTopics) * 100);
}
