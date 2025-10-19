  document.getElementById('updateBtn').addEventListener('click', async () => {
    const newName = document.getElementById('updatedzairyou').value;

    const response = await fetch('/zairyou', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ updatedzairyou: newName })
    });

    const result = await response.json();
    console.log('変更後のJSON(from html):', result);
    alert(`材料名が「${newName}」に変更されました(from html)`);
  });

