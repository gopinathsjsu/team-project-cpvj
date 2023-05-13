// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: activityrecord.sql

package db

import (
	"context"
)

const createActivityRecords = `-- name: CreateActivityRecords :one
insert INTO activityrecords
(type,userid,locationid,deviceid )
VALUES
    ($1,$2,$3,$4) RETURNING id, userid, type, time, locationid, deviceid
`

type CreateActivityRecordsParams struct {
	Type       int32 `json:"type"`
	Userid     int64 `json:"userid"`
	Locationid int64 `json:"locationid"`
	Deviceid   int64 `json:"deviceid"`
}

func (q *Queries) CreateActivityRecords(ctx context.Context, arg CreateActivityRecordsParams) (Activityrecord, error) {
	row := q.db.QueryRowContext(ctx, createActivityRecords,
		arg.Type,
		arg.Userid,
		arg.Locationid,
		arg.Deviceid,
	)
	var i Activityrecord
	err := row.Scan(
		&i.ID,
		&i.Userid,
		&i.Type,
		&i.Time,
		&i.Locationid,
		&i.Deviceid,
	)
	return i, err
}

const getLatestActivityRecord = `-- name: GetLatestActivityRecord :one
SELECT id, userid, type, time, locationid, deviceid FROM activityrecords
WHERE userid = $1
ORDER BY time desc
    LIMIT 1
`

func (q *Queries) GetLatestActivityRecord(ctx context.Context, userid int64) (Activityrecord, error) {
	row := q.db.QueryRowContext(ctx, getLatestActivityRecord, userid)
	var i Activityrecord
	err := row.Scan(
		&i.ID,
		&i.Userid,
		&i.Type,
		&i.Time,
		&i.Locationid,
		&i.Deviceid,
	)
	return i, err
}