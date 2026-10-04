# Portfolio — Lena Obiang

Site vitrine de Lena Léontine Nzamo Obiang, technicienne audiovisuelle à Libreville.
Page unique en HTML/CSS/JS, sans dépendance externe : il suffit de l'héberger tel quel.

## Contenu

```
index.html                 la page
CV_Lena_Obiang.pdf         CV téléchargeable
assets/css/style.css       mise en page et couleurs
assets/js/main.js          lecteurs vidéo et timecode des écrans
assets/fonts/              polices (Big Shoulders Display, Hanken Grotesk)
assets/img/                portrait, affiches des vidéos, favicon, image de partage
assets/video/              vidéos complètes + courtes boucles muettes de l'accueil
```

## Mettre le site en ligne avec GitHub Pages

1. Créez un compte sur https://github.com si ce n'est pas déjà fait.
2. Cliquez sur **New repository**, nommez-le par exemple `lena-portfolio`, laissez-le **Public**, puis **Create repository**.
3. Envoyez les fichiers, au choix :
   - **Sans ligne de commande** : sur la page du dépôt, cliquez sur **uploading an existing file**, glissez *tout le contenu* de ce dossier (pas le dossier lui-même), puis **Commit changes**.
   - **Avec Git** (le dossier est déjà un dépôt Git avec un premier commit) :
     ```bash
     git remote add origin https://github.com/VOTRE-PSEUDO/lena-portfolio.git
     git branch -M main
     git push -u origin main
     ```
4. Dans le dépôt : **Settings → Pages**. Sous *Build and deployment*, choisissez **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
5. Après une à deux minutes, le site est en ligne à l'adresse
   `https://VOTRE-PSEUDO.github.io/lena-portfolio/`

Astuce : si le dépôt s'appelle exactement `VOTRE-PSEUDO.github.io`, le site sera à la racine : `https://VOTRE-PSEUDO.github.io/`.

## Modifier le contenu

- **Textes** : tout est dans `index.html` (sections *Réalisations*, *Parcours*, *Savoir-faire*, *Contact*).
- **Ajouter une vidéo** : déposez le fichier `.mp4` dans `assets/video/`, une image d'affiche dans `assets/img/`, puis copiez un bloc `<article class="reel">…</article>` dans `index.html` et changez les chemins.
- **Couleurs** : en haut de `assets/css/style.css` (`--fleuve`, `--ambre`, etc.).
- **CV** : remplacez `CV_Lena_Obiang.pdf` par la nouvelle version en gardant le même nom.

Le site s'affiche aussi en local : ouvrez simplement `index.html` dans un navigateur.
