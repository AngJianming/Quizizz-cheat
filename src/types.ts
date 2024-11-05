/*
Quizizz-cheat
Copyright (C) AngJianming

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.

github repository: https://github.com/gbaranski/quizizz-cheat
email: root@gbaranski.com
*/



export interface VueElement extends HTMLElement {
  __vue__: any;
}

interface QuizQuestionOption {
  text: string;
}

export interface QuizQuestion {
  _id: string;
  structure: {
    answer: number | number[];
    options?: QuizQuestionOption[];
    query: {
      text: string;
      answer: number;
    }
  };
}

export interface QuizInfo {
  data: {
    questions: QuizQuestion[];
  }
}

