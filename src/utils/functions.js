export function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

export async function uploadImages(establishmentType, establishmentName, files) {
  const cloudName = 'dylb6x7hj';
  const uploadPreset = 'preset_hotels';

  const type = establishmentType;
  console.log('establishmentName', establishmentName);
  const nameSlug = slugify(establishmentName);
  const folder = `${slugify(type)}s/${nameSlug}`;
  const uploadedUrls = [];

  let uploaded = true;

  for (const file of files) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
    formData.append('folder', folder);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.secure_url) {
        uploadedUrls.push(data.secure_url); // ✅ corrigé ici
        console.log('✅ Image uploadée :', data.secure_url);
      } else {
        console.error('❌ Erreur Cloudinary :', data);
        uploaded = false;
      }

    } catch (err) {
      console.error('🚨 Erreur réseau :', err.message || err);
      uploaded = false;
    }
  }
  console.log('Images uploadées avec succès :', uploadedUrls);
  return { uploaded, uploadedUrls };
}


const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // enlever accents
    .replace(/\s+/g, '-')            // espaces → tirets
    .replace(/[^\w-]/g, '');         // enlever caractères spéciaux


// Fonctions de validation
export function validateFirstName(firstName) {
  return firstName.length >= 2;
};

export function validateLastName(lastName) {
  return lastName.length >= 2;
};

export function validateEmail(emailAddress) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailAddress);
};

export function validatePhoneNumber(phoneNumber) {
  // Supprime tous les caractères non numériques
  const cleanedPhone = phoneNumber.replace(/\D/g, '');
  return cleanedPhone.length >= 8 && cleanedPhone.length <= 15;
};

export function formatPrice(value) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XAF',
    minimumFractionDigits: 0
  }).format(value) // Optional: replace 'XOF' with 'FCFA'
}

export function formatDate(dateStr) {
  const today = new Date();
  const year = today.getFullYear();

  if (dateStr.startsWith("Today")) {
    return today.toISOString().split("T")[0];
  }

  if (dateStr.startsWith("Tomorrow")) {
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }

  // Cas normal : extraire "Jun 10"
  const [_, monthStr, dayStr] = dateStr.match(/(\w+)\s(\d+)/) || [];
  if (monthStr && dayStr) {
    const date = new Date(`${monthStr} ${dayStr}, ${year}`);
    return date.toISOString().split("T")[0];
  }

  return null;
}

// utils/categoryUtils.js

export function getCategoryCheckers(currentCategoryId) {
  return {
    isRestaurant: currentCategoryId === 1,
    isNightlife: currentCategoryId === 2,
    isShopping: currentCategoryId === 3,
    isSportsLeisure: currentCategoryId === 4,
    isBeautySalonsSpas: currentCategoryId === 5,
    isAutomobile: currentCategoryId === 6,
    isHousesWorks: currentCategoryId === 7,
    isPowerSupplies: currentCategoryId === 8,
    isArtLeisure: currentCategoryId === 9,
    isHealthMedical: currentCategoryId === 10,
    isServicesForProfessionals: currentCategoryId === 11,
    isPets: currentCategoryId === 12,
    isRealEstate: currentCategoryId === 13,
    isHotel: currentCategoryId === 14,
    isLocalServices: currentCategoryId === 15,
    isEventOrganization: currentCategoryId === 16,
    isPublicServicesGovernment: currentCategoryId === 17,
    isFinancialServices: currentCategoryId === 18,
    isTrainingTeaching: currentCategoryId === 19,
    isReligiousOrganization: currentCategoryId === 20,
    isTravel: currentCategoryId === 21,
    isMedia: currentCategoryId === 22,
    isCoffeesTeas: currentCategoryId === 23,
    isTouristAttractions: currentCategoryId === 185,
  };
}
