/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  q: string;
  opts: string[];
  correct: number;
}

export interface Passage {
  title: string;
  startNum: number;
  questions: Question[];
}

export interface PracticeTest {
  id: number;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
  questionCount: number;
  passages: Record<number, Passage>;
}
