<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';
import { Phone, AtSign, Globe, MapPin, CircleUser, LockKeyhole, Eye, EyeOff } from 'lucide-vue-next';
import { validateFirstName, validateLastName, validateEmail, validatePhoneNumber } from '@/utils/functions';

const props = defineProps({
    formData: Object
});
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const confirmPassword = ref('')
const passwordsMatch = ref(true);
const passwordValidFormat = ref(true); // Peut être utilisé pour afficher une erreur si nécessaire
const firstNameValidFormat = ref(true); // Peut être utilisé pour afficher une erreur si nécessaire
const lastNameValidFormat = ref(true); // Peut être utilisé pour afficher une erreur si nécessaire
const emailValidFormat = ref(true); // Peut être utilisé pour afficher une erreur si nécessaire
const phone_numberValidFormat = ref(true); // Peut être utilisé pour afficher une erreur si nécessaire


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

watch(() => props.formData.firstName, (newFirstName) => {
    if (newFirstName) {
        firstNameValidFormat.value = validateFirstName(newFirstName)
        if (!firstNameValidFormat.value) return;
    } else {
        firstNameValidFormat.value = true;
    }
});

watch(() => props.formData.lastName, (newLastName) => {
    if (newLastName) {
        lastNameValidFormat.value = validateLastName(newLastName)
        if (!lastNameValidFormat.value) return;

    } else {
        lastNameValidFormat.value = true;
    }
});

watch(() => props.formData.email, (newEmail) => {
    if (newEmail) {
        emailValidFormat.value = validateEmail(newEmail)
        if (!emailValidFormat.value) return;
    } else {
        emailValidFormat.value = true;
    }
});

watch(() => props.formData.phone_number, (newphone_number) => {
    if (newphone_number) {
        phone_numberValidFormat.value = validatePhoneNumber(newphone_number)
        if (!phone_numberValidFormat.value) return;
    } else {
        firstNameValidFormat.value = true;
    }
});

watch(() => props.formData.password, (newPassword) => {
    if (newPassword) {
        passwordValidFormat.value = passwordRegex.test(newPassword);
        if (!passwordValidFormat.value) return;
    } else {
        passwordValidFormat.value = true;
    }
});

watch([() => props.formData.password, confirmPassword], () => {
    // passwordsMatch.value = props.formData.password === confirmPassword.value;
    if (props.formData.password && confirmPassword.value) {
        passwordsMatch.value = props.formData.password === confirmPassword.value;
        if (!passwordsMatch.value) return;
    } else {
        passwordsMatch.value = false;
        return;
    }
});

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value
}
const toggleConfirmPasswordVisibility = () => {
    showConfirmPassword.value = !showConfirmPassword.value
}
const emit = defineEmits(['updateFormData']);

const handleChange = (event) => {
    emit('updateFormData', { [event.target.name]: event.target.value });
};
</script>

<template>
    <div class="space-y-6">
        <!-- Section principale - Informations de contact -->
        <div class="bg-white  rounded-lg">
            <h3 class="text-lg font-medium leading-6 text-gray-900 mb-2">{{ $t('infoContact') }}</h3>
            <p class="text-sm text-gray-400 mb-6">{{ $t('descriptioncontactInfo') }}</p>
            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-6">
                    <div class="flex items-center">
                        <MapPin class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="address" class="block text-sm font-medium text-gray-700">{{ $t('address') }}</label>
                    </div>
                    <input type="text" name="address" id="address"
                        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 bg-gray-300 cursor-not-allowed sm:text-sm"
                        placeholder="123 rue de ville, 75001 ville" :value="formData.address" readonly required />
                </div>
            </div>
        </div>

        <!-- Section - Informations personnelles -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div class="flex items-center mb-4">
                <h3 class="text-lg font-medium leading-6 text-gray-900">{{ $t('infoConnectDashboard') }}</h3>
                <div class="ml-3 flex-grow border-t border-gray-300"></div>
            </div>

            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <div class="flex items-center">
                        <CircleUser class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="lastName" class="block text-sm font-medium text-gray-700">{{ $t('first_name')
                        }}<span class="text-red-500">*</span></label>
                    </div>
                    <input type="text" name="lastName" id="lastName"
                        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
                        :class="firstNameValidFormat ? '' : 'border-red-500'" :placeholder="$t('your_last_name')"
                        :value="formData.firstName" @input="handleChange" required />
                </div>

                <div class="sm:col-span-3">
                    <div class="flex items-center">
                        <CircleUser class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="firstName" class="block text-sm font-medium text-gray-700">{{ $t('last_name') }}<span
                                class="text-red-500">*</span></label>
                    </div>
                    <input type="text" name="firstName" id="firstName"
                        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
                        :class="lastNameValidFormat ? '' : 'border-red-500'" :placeholder="$t('your_first_name')"
                        :value="formData.lastName" @input="handleChange" required />
                </div>

                <div class="sm:col-span-3">
                    <div class="flex items-center">
                        <Phone class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="phone_number" class="block text-sm font-medium text-gray-700">
                            {{ $t('phone') }}<span class="text-red-500">*</span>
                        </label>
                    </div>
                    
                    <input type="tel" name="phone_number" id="phone_number"
                        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
                        :class="phone_numberValidFormat ? '' : 'border-red-500'" placeholder="640404040"
                        :value="formData.phone_number" @input="handleChange" required /> <span v-if="!emailValidFormat" class="text-red-500 text-sm">{{ $t('alert.validations.phone_number') }}</span>
                </div>

                <div class="sm:col-span-3">
                    <div class="flex items-center">
                        <AtSign class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="email" class="block text-sm font-medium text-gray-700">{{ $t('email') }}<span
                                class="text-red-500">*</span></label>
                    </div>
                    <input type="email" name="email" id="email"
                        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
                        :class="emailValidFormat ? '' : 'border-red-500'" placeholder="contact@example.com"
                        :value="formData.email" @input="handleChange" required /><span v-if="!emailValidFormat" class="text-red-500 text-sm">{{ $t('alert.validations.email') }}</span>
                </div>

                <div class="sm:col-span-6">
                    <div class="flex items-center">
                        <LockKeyhole class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="password" class="block text-sm font-medium text-gray-700">{{ $t('password')
                        }}</label><span class="text-red-500">*</span>
                    </div>

                    <div class="relative">
                        <input :type="showPassword ? 'text' : 'password'" name="password" id="password"
                            class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm pr-10"
                            placeholder="********" :value="formData.password" @input="handleChange" required />

                        <!-- Icône œil -->
                        <div class="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                            @click="togglePasswordVisibility">
                            <Eye v-if="!showPassword" class="h-5 w-5 text-gray-500" />
                            <EyeOff v-else class="h-5 w-5 text-gray-500" />
                        </div>
                    </div>
                    <span v-if="!passwordValidFormat" class="m-2 text-red-500 text-sm">{{ $t('passwordRules.complexity')
                        }}</span>
                </div>

                <div class="sm:col-span-6">
                    <div class="flex items-center">
                        <LockKeyhole class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="password" class="block text-sm font-medium text-gray-700">{{
                            $t('confirmPassword') }}</label><span class="text-red-500">*</span>
                    </div>

                    <div class="relative">
                        <input :type="showConfirmPassword ? 'text' : 'password'" name="Cpassword" id="Cpassword"
                            class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm pr-10"
                            placeholder="********" v-model="confirmPassword" required />

                        <!-- Icône œil -->
                        <div class="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                            @click="toggleConfirmPasswordVisibility">
                            <Eye v-if="!showConfirmPassword" class="h-5 w-5 text-gray-500" />
                            <EyeOff v-else class="h-5 w-5 text-gray-500" />
                        </div>
                    </div>
                    <span v-if="!passwordsMatch" class="m-2 text-red-500 text-sm">{{
                        $t('passwordRules.passwordsNotMatch') }}</span>
                </div>
            </div>
        </div>

        <!-- Section - Site web -->
        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-6">
                    <div class="flex items-center">
                        <Globe class="h-5 w-5 text-gray-400 mr-2" />
                        <label for="website" class="block text-sm font-medium text-gray-700">{{ $t('webSite') }}</label>
                    </div>
                    <input type="url" name="website" id="website"
                        class="w-full px-2 py-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 sm:text-sm"
                        placeholder="https://www.example.com" :value="formData.website" @input="handleChange" />
                    <p class="mt-1 text-sm text-gray-400">{{ $t('optional') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
    display: none;
}

input[type="password"]::-webkit-credentials-auto-fill-button,
input[type="password"]::-webkit-textfield-decoration-container {
    display: none !important;
}
</style>