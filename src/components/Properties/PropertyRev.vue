<!--
  - SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<div class="property property--rev">
		<div class="property__row">
			<div class="property__label" />

			<div class="property__value">
				{{ t('contacts', 'Last modified') }} {{ relativeDate }}
			</div>

			<div class="property__actions" />
		</div>
	</div>
</template>

<script>
import moment from '@nextcloud/moment'

export default {
	name: 'PropertyRev',

	props: {
		value: {
			type: Object,
			required: true,
		},
	},

	computed: {
		relativeDate() {
			return moment.unix(this.value.toUnixTime()).fromNow()
		},
	},
}
</script>

<style lang="scss" scoped>
.property {
	&__value {
		opacity: .5;
		color: var(--color-text-lighter);
		line-height: 44px;
	}
}
</style>
