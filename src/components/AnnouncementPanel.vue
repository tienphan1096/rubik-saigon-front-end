<template>
  <b-card
    :header="$t('announcement.label')"
    class="text-left"
  >
    <i18n path="announcement.content" tag="b-card-text">
      <span style="font-weight: bold">rubik-saigon.com</span>
      <span style="font-weight: bold">{{ $t('announcement.disclaimer') }}</span>
      <br>
      <br>
    </i18n>
  </b-card>
</template>

<script>

export default {
  name: 'AnnouncementPanel',
};
</script>
