export function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}

export async function uploadImages(establishmentType, establishmentName, files) {
  const cloudName = 'dylb6x7hj'
  const uploadPreset = 'preset_hotels'

  const type = establishmentType.value
  const nameSlug = slugify(establishmentName.value)
  const folder = `${slugify(type)}s/${nameSlug}`
  const uploadedUrls = []

  let uploaded = true

  for (const file of files.value) {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', uploadPreset)
    formData.append('folder', folder)

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (res.ok && data.secure_url) {
        uploadedUrls.value.push(data.secure_url)
        console.log('Image uploadée :', data.secure_url)
      } else {
        console.error('Erreur lors de l\'upload :', data)
        uploaded = false
      }

    } catch (err) {
      console.error('Erreur réseau :', err)
      uploaded = false
    }
  }

  return uploaded
}


const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // enlever accents
    .replace(/\s+/g, '-')            // espaces → tirets
    .replace(/[^\w-]/g, '');         // enlever caractères spéciaux