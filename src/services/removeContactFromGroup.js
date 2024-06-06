/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
import axios from '@nextcloud/axios'

/**
 * Append a group to a contact
 *
 * @param {Contact} contact the contact model
 * @param {string} groupName the group name
 */
const removeContactFromGroup = async function(contact, groupName) {
	const foundGroups = contact.groups

	let currentGroups = foundGroups.map(groupName => encodeURIComponent(groupName))

	currentGroups = currentGroups.filter(e => e !== groupName)

	return axios.patch(contact.url, {}, {
		headers: {
			'X-PROPERTY': 'CATEGORIES',
			'X-PROPERTY-REPLACE': currentGroups,
		},
	})
}

export default removeContactFromGroup
