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

import * as express from 'express';
import * as typegoose from 'typegoose';
import { PageGetter } from './Pages/PageManager';

export default class UserOperations {
  static register(app: express.Express, prefix: string) {

    // We need just two calls: one for all pages, and one for a single page
    app.get(prefix + '/', async (_req, _res) => _res.send(await PageGetter.getAllPages()))
    app.get(prefix + '/:id(*)', async (_req, _res)=> _res.send(await PageGetter.getPage(_req.params.id)))
  }
}
