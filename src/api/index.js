import request from '../utils/request'

// login
export function login(data) {
	return request({
		loading: true,
		url: '/login',
		method: 'post',
		data
	})
}

// userinfo
export function getUserInfo(params) {
	return request({
		url: '/water/user',
		method: 'get',
		params
	})
}