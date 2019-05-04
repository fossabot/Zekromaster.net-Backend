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

export class OptImageGetter {
  static async getOptImageList(): Promise<string[]> {
    return (await OptImageModel.find({})).map(x => x._id);
  }

  static async getOptImage(id: string): Promise<string> {
    return (await OptImageModel.findOne({_id: id})).image;
  }
}

export class OptImage extends Typegoose {
  // ID is the in-api endpoint
  @prop({required: true})
  _id: string

  @prop({required: true})
  image: string;
}

export const OptImageModel = new OptImage().getModelForClass(OptImage, {schemaOptions: {collection: 'optimages'}});
