// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: memberretentionanalytics.sql

package db

import (
	"context"
)

const getDailyNewMemberEnrolments = `-- name: GetDailyNewMemberEnrolments :many
SELECT
    DATE_TRUNC('day', m.startdate) AS day,
    COUNT(m.userid) AS new_members
FROM
    membership m
GROUP BY
    day
ORDER BY
    day
`

type GetDailyNewMemberEnrolmentsRow struct {
	Day        int64 `json:"day"`
	NewMembers int64 `json:"new_members"`
}

func (q *Queries) GetDailyNewMemberEnrolments(ctx context.Context) ([]GetDailyNewMemberEnrolmentsRow, error) {
	rows, err := q.db.QueryContext(ctx, getDailyNewMemberEnrolments)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetDailyNewMemberEnrolmentsRow{}
	for rows.Next() {
		var i GetDailyNewMemberEnrolmentsRow
		if err := rows.Scan(&i.Day, &i.NewMembers); err != nil {
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

const getKMostFrequentMembers = `-- name: GetKMostFrequentMembers :many
SELECT
    ua.userid,
    u.name,
    COUNT(ua.id) AS total_visits
FROM
    useractivity ua
        JOIN users u ON ua.userid = u.id
GROUP BY
    ua.userid, u.name
ORDER BY
    total_visits DESC
    limit $1
`

type GetKMostFrequentMembersRow struct {
	Userid      int64  `json:"userid"`
	Name        string `json:"name"`
	TotalVisits int64  `json:"total_visits"`
}

func (q *Queries) GetKMostFrequentMembers(ctx context.Context, limit int32) ([]GetKMostFrequentMembersRow, error) {
	rows, err := q.db.QueryContext(ctx, getKMostFrequentMembers, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetKMostFrequentMembersRow{}
	for rows.Next() {
		var i GetKMostFrequentMembersRow
		if err := rows.Scan(&i.Userid, &i.Name, &i.TotalVisits); err != nil {
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

const getMembershipCountsByType = `-- name: GetMembershipCountsByType :many
SELECT
    mt.member_type,
    COUNT(m.membershipid) AS total_members
FROM
    membership m
        JOIN membershiptypes mt ON m.membershipid = mt.id
GROUP BY
    mt.member_type
`

type GetMembershipCountsByTypeRow struct {
	MemberType   int32 `json:"member_type"`
	TotalMembers int64 `json:"total_members"`
}

func (q *Queries) GetMembershipCountsByType(ctx context.Context) ([]GetMembershipCountsByTypeRow, error) {
	rows, err := q.db.QueryContext(ctx, getMembershipCountsByType)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []GetMembershipCountsByTypeRow{}
	for rows.Next() {
		var i GetMembershipCountsByTypeRow
		if err := rows.Scan(&i.MemberType, &i.TotalMembers); err != nil {
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
