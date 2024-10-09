export function download(content: any, fileName: any, contentType: any) {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

export function downloadZip(content: any, fileName: string, contentType: string, encoding: string) {
  const url = window.URL.createObjectURL(
    new Blob([content], {
      type: contentType,
      // @ts-ignore
      encoding,
    }),
  );
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
}

// export const convertFileToJson = (file: Blob) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
//     reader.readAsText(file);
//   });
