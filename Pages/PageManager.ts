// Copyright (c) 2019 Zekromaster <personal@zekromaster.net>
//
// GNU AFFERO GENERAL PUBLIC LICENSE
//    Version 3, 19 November 2007
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { prop, Typegoose } from 'typegoose';

export class PageGetter {
  static async getAllPages(): Promise<Page[]> {
    return (await PageModel.find({})).sort(
      (a,b) => a.title > b.title ? 1 : -1
    );
  }

  static async getPage(id: string): Promise<Page> {
    return await PageModel.findOne({_id: id});
  }
}

type pageData = {locales?: {[name: string]: any}, [name: string]: any};
export class Page extends Typegoose {
  // ID is the in-api endpoint
  @prop({required: true})
  _id: string

  @prop({required: true})
  type: string;

  @prop({required: true})
  title: string;

  @prop({required: true})
  description: string;

  @prop({required: true})
  data: pageData;
}

export const PageModel = new Page().getModelForClass(Page, {schemaOptions: {collection: 'pages'}});
