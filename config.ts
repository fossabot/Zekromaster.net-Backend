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

import * as fs from 'fs';

var MONGO_CREDENTIALS: {usr: string, pwd: string} = JSON.parse(fs.readFileSync('/etc/zek_mongo.json', 'utf8'));
export const CONFIG = {
  DB_URI: "mongodb://"  + MONGO_CREDENTIALS.usr + ":" + MONGO_CREDENTIALS.pwd + "@localhost:27017/website"
}
