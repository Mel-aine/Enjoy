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

  return { uploaded, uploadedUrls };
}


const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // enlever accents
    .replace(/\s+/g, '-')            // espaces → tirets
    .replace(/[^\w-]/g, '');         // enlever caractères spéciaux