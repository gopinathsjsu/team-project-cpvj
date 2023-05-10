// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: useractivity.sql

package db

import (
	"context"
	"time"
)

const createUserActivity = `-- name: CreateUserActivity :one
INSERT INTO useractivity
("start" ,"end" ,userid,deviceid,locationid)
VALUES
    ($1,$2,$3,$4,$5) RETURNING id, start, "end", userid, deviceid, locationid
`

type CreateUserActivityParams struct {
	Start      time.Time `json:"start"`
	End        time.Time `json:"end"`
	Userid     int64     `json:"userid"`
	Deviceid   int64     `json:"deviceid"`
	Locationid int64     `json:"locationid"`
}

func (q *Queries) CreateUserActivity(ctx context.Context, arg CreateUserActivityParams) (Useractivity, error) {
	row := q.db.QueryRowContext(ctx, createUserActivity,
		arg.Start,
		arg.End,
		arg.Userid,
		arg.Deviceid,
		arg.Locationid,
	)
	var i Useractivity
	err := row.Scan(
		&i.ID,
		&i.Start,
		&i.End,
		&i.Userid,
		&i.Deviceid,
		&i.Locationid,
	)
	return i, err
}

const getDayWiseActivity = `-- name: GetDayWiseActivity :many
SELECT
    DATE(ua.start) AS date,
    SUM(EXTRACT(EPOCH FROM (ua.end - ua.start))) AS total_time_seconds
FROM
    useractivity ua
WHERE
    ua.userid = $1
  AND EXTRACT(YEAR FROM ua.start) = EXTRACT(YEAR FROM NOW())
GROUP BY
    DATE(ua.start)
ORDER BY
    DATE(ua.start)
`

type GetDayWiseActivityRow struct {
	Date             time.Time `json:"date"`
	TotalTimeSeconds float64     `json:"total_time_seconds"`
}

func (q *Queries) GetDayWiseActivity(ctx context.Context, userid int64) ([]GetDayWiseActivityRow, error) {
	rows, err := q.db.QueryContext(ctx, getDayWiseActivity, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetDayWiseActivityRow{}
	for rows.Next() {
		var i GetDayWiseActivityRow
		if err := rows.Scan(&i.Date, &i.TotalTimeSeconds); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPastWorkoutData1 = `-- name: GetPastWorkoutData1 :many
SELECT d.description AS devicetype, SUM(EXTRACT(EPOCH FROM (ua.end - ua.start))) AS totaltimeseconds
FROM useractivity ua
         JOIN device d ON ua.deviceid = d.id
WHERE ua.userid = $1 AND ua.start >= NOW() - INTERVAL '1 days'
GROUP BY  d.description
ORDER BY d.description
`

type GetPastWorkoutDataRow struct {
	Devicetype       string `json:"devicetype"`
	Totaltimeseconds float64  `json:"totaltimeseconds"`
}

func (q *Queries) GetPastWorkoutData1(ctx context.Context, userid int64) ([]GetPastWorkoutDataRow, error) {
	rows, err := q.db.QueryContext(ctx, getPastWorkoutData1, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetPastWorkoutDataRow{}
	for rows.Next() {
		var i GetPastWorkoutDataRow
		if err := rows.Scan(&i.Devicetype, &i.Totaltimeseconds); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPastWorkoutData30 = `-- name: GetPastWorkoutData30 :many
SELECT d.description AS devicetype, SUM(EXTRACT(EPOCH FROM (ua.end - ua.start))) AS totaltimeseconds
FROM useractivity ua
         JOIN device d ON ua.deviceid = d.id
WHERE ua.userid = $1 AND ua.start >= NOW() - INTERVAL '30 days'
GROUP BY  d.description
ORDER BY d.description
`

type GetPastWorkoutData30Row struct {
	Devicetype       string `json:"devicetype"`
	Totaltimeseconds int64  `json:"totaltimeseconds"`
}

func (q *Queries) GetPastWorkoutData30(ctx context.Context, userid int64) ([]GetPastWorkoutDataRow, error) {
	rows, err := q.db.QueryContext(ctx, getPastWorkoutData30, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetPastWorkoutDataRow{}
	for rows.Next() {
		var i GetPastWorkoutDataRow
		if err := rows.Scan(&i.Devicetype, &i.Totaltimeseconds); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPastWorkoutData60 = `-- name: GetPastWorkoutData60 :many
SELECT d.description AS devicetype, SUM(EXTRACT(EPOCH FROM (ua.end - ua.start))) AS totaltimeseconds
FROM useractivity ua
         JOIN device d ON ua.deviceid = d.id
WHERE ua.userid = $1 AND ua.start >= NOW() - INTERVAL '60 days'
GROUP BY  d.description
ORDER BY d.description
`

type GetPastWorkoutData60Row struct {
	Devicetype       string `json:"devicetype"`
	Totaltimeseconds int64  `json:"totaltimeseconds"`
}

func (q *Queries) GetPastWorkoutData60(ctx context.Context, userid int64) ([]GetPastWorkoutDataRow, error) {
	rows, err := q.db.QueryContext(ctx, getPastWorkoutData60, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetPastWorkoutDataRow{}
	for rows.Next() {
		var i GetPastWorkoutDataRow
		if err := rows.Scan(&i.Devicetype, &i.Totaltimeseconds); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPastWorkoutData7 = `-- name: GetPastWorkoutData7 :many
SELECT d.description AS devicetype, SUM(EXTRACT(EPOCH FROM (ua.end - ua.start))) AS totaltimeseconds
FROM useractivity ua
         JOIN device d ON ua.deviceid = d.id
WHERE ua.userid = $1 AND ua.start >= NOW() - INTERVAL '7 days'
GROUP BY  d.description
ORDER BY d.description
`

type GetPastWorkoutData7Row struct {
	Devicetype       string `json:"devicetype"`
	Totaltimeseconds float64  `json:"totaltimeseconds"`
}

func (q *Queries) GetPastWorkoutData7(ctx context.Context, userid int64) ([]GetPastWorkoutDataRow, error) {
	rows, err := q.db.QueryContext(ctx, getPastWorkoutData7, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetPastWorkoutDataRow{}
	for rows.Next() {
		var i GetPastWorkoutDataRow
		if err := rows.Scan(&i.Devicetype, &i.Totaltimeseconds); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getPastWorkoutData90 = `-- name: GetPastWorkoutData90 :many
SELECT d.description AS devicetype, SUM(EXTRACT(EPOCH FROM (ua.end - ua.start))) AS totaltimeseconds
FROM useractivity ua
         JOIN device d ON ua.deviceid = d.id
WHERE ua.userid = $1 AND ua.start >= NOW() - INTERVAL '90 days'
GROUP BY  d.description
ORDER BY d.description
`

type GetPastWorkoutData90Row struct {
	Devicetype       string `json:"devicetype"`
	Totaltimeseconds int64  `json:"totaltimeseconds"`
}

func (q *Queries) GetPastWorkoutData90(ctx context.Context, userid int64) ([]GetPastWorkoutDataRow, error) {
	rows, err := q.db.QueryContext(ctx, getPastWorkoutData90, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetPastWorkoutDataRow{}
	for rows.Next() {
		var i GetPastWorkoutDataRow
		if err := rows.Scan(&i.Devicetype, &i.Totaltimeseconds); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getUserActivity = `-- name: GetUserActivity :many
SELECT id, start, "end", userid, deviceid, locationid FROM useractivity
WHERE userid = $1
`

func (q *Queries) GetUserActivity(ctx context.Context, userid int64) ([]Useractivity, error) {
	rows, err := q.db.QueryContext(ctx, getUserActivity, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Useractivity{}
	for rows.Next() {
		var i Useractivity
		if err := rows.Scan(
			&i.ID,
			&i.Start,
			&i.End,
			&i.Userid,
			&i.Deviceid,
			&i.Locationid,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}