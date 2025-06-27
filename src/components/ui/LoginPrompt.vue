<template>
  <div class="border border-gray-200 rounded-md p-4 flex items-start space-x-2 bg-white shadow-sm">
    <p class="text-sm text-gray-700">
      <i18n-t keypath="loginPrompt.message">
        <template #login>
          <a href="/login" class="text-blue-600 hover:underline font-medium">
            {{ $t('loginPrompt.login') }}
          </a>
        </template>
        <template #register>
          <a href="/register" class="text-blue-600 hover:underline font-medium">
            {{ $t('loginPrompt.register') }}
          </a>
        </template>
      </i18n-t>
    </p>
  </div>
</template>

<script setup>
// No logic needed here for static message
</script>
