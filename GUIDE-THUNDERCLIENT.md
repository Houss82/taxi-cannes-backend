# 🚕 Guide d'utilisation ThunderClient - Taxi Cannes

## 📥 Comment importer la collection de tests

### Méthode 1 : Import automatique (Recommandé)

1. Ouvrez VS Code
2. Cliquez sur l'icône **ThunderClient** (⚡) dans la barre latérale gauche
3. Allez dans **Collections**
4. Cliquez sur le menu **⋮** (trois points) en haut
5. Sélectionnez **Import**
6. Choisissez le fichier : `thunder-tests/thunderclient.json`
7. ✅ Tous les tests sont maintenant importés !

### Méthode 2 : Import manuel

Si l'import ne fonctionne pas, créez les requêtes manuellement en suivant les exemples ci-dessous.

---

## 🧪 Tests disponibles (Dans l'ordre d'utilisation)

### 1️⃣ **Créer une réservation complète**

- **Méthode:** POST
- **URL:** `http://localhost:3000/users/reservation`
- **Body:**

```json
{
  "nom": "Dupont Jean",
  "indicatifPays": "+33",
  "telephone": "612345678",
  "email": "jean.dupont@example.com",
  "date": "2025-10-15",
  "heure": "14:30",
  "adresseDepart": "Aéroport Nice Côte d'Azur",
  "adresseArrivee": "Cannes, 06400",
  "nombreBagages": "2",
  "nombrePassagers": "3",
  "commentaires": "Vol Air France AF7654 - Siège bébé nécessaire"
}
```

**✅ Résultat attendu:** Status 201 avec l'objet réservation créé

---

### 2️⃣ **Créer une réservation minimale**

- **Méthode:** POST
- **URL:** `http://localhost:3000/users/reservation`
- **Body:**

```json
{
  "nom": "Martin Sophie",
  "telephone": "698765432",
  "date": "2025-10-16",
  "heure": "09:00",
  "adresseDepart": "Gare SNCF Cannes",
  "adresseArrivee": "Monaco, Place du Casino",
  "nombreBagages": "1",
  "nombrePassagers": "2"
}
```

**✅ Résultat attendu:** Status 201 (indicatifPays sera +33 par défaut)

---

### 3️⃣ **Créer une réservation avec indicatif UK**

- **Méthode:** POST
- **URL:** `http://localhost:3000/users/reservation`
- **Body:**

```json
{
  "nom": "Smith John",
  "indicatifPays": "+44",
  "telephone": "7700900123",
  "email": "john.smith@example.co.uk",
  "date": "2025-10-20",
  "heure": "18:45",
  "adresseDepart": "Hotel Martinez Cannes",
  "adresseArrivee": "Aéroport Nice Côte d'Azur Terminal 2",
  "nombreBagages": "4",
  "nombrePassagers": "2",
  "commentaires": "Véhicule spacieux svp - Beaucoup de bagages"
}
```

**✅ Résultat attendu:** Status 201 avec indicatifPays +44

---

### 4️⃣ **Lister toutes les réservations**

- **Méthode:** GET
- **URL:** `http://localhost:3000/users/reservations`
- **Body:** Aucun

**✅ Résultat attendu:** Status 200 avec la liste de toutes les réservations

---

### 5️⃣ **Récupérer une réservation par ID**

- **Méthode:** GET
- **URL:** `http://localhost:3000/users/reservation/ID_A_REMPLACER`
- **Body:** Aucun

**⚠️ Important:** Remplacez `ID_A_REMPLACER` par un ID réel obtenu dans la réponse du test 1, 2 ou 3.

**Exemple:** `http://localhost:3000/users/reservation/68ec12cf6eab8a791e874faf`

**✅ Résultat attendu:** Status 200 avec la réservation spécifique

---

### 6️⃣ **Supprimer une réservation**

- **Méthode:** DELETE
- **URL:** `http://localhost:3000/users/reservation/ID_A_REMPLACER`
- **Body:** Aucun

**⚠️ Important:** Remplacez `ID_A_REMPLACER` par un ID réel.

**✅ Résultat attendu:** Status 200 avec message de confirmation

---

### 7️⃣ **Tester la route /date**

- **Méthode:** GET
- **URL:** `http://localhost:3000/date`
- **Body:** Aucun

**✅ Résultat attendu:** Status 200 avec `{"now":"2025-10-12T..."}`

---

## 📝 Ordre d'exécution recommandé

1. **Test 7** → Vérifier que le serveur répond
2. **Test 1** → Créer une réservation et **copier l'\_id** de la réponse
3. **Test 4** → Vérifier que la réservation apparaît dans la liste
4. **Test 5** → Récupérer la réservation créée (collez l'ID)
5. **Test 2 et 3** → Créer d'autres réservations
6. **Test 4** → Vérifier que vous avez maintenant 3 réservations
7. **Test 6** → Supprimer une réservation (collez un ID)
8. **Test 4** → Vérifier qu'il ne reste que 2 réservations

---

## 🎯 Instructions pas à pas dans ThunderClient

### Pour faire un test POST :

1. Cliquez sur la requête dans ThunderClient
2. Vérifiez que la méthode est **POST**
3. Vérifiez l'URL
4. Allez dans l'onglet **Body**
5. Sélectionnez **JSON**
6. Le JSON devrait déjà être rempli
7. Cliquez sur **Send** 🚀
8. Vérifiez la réponse en bas

### Pour faire un test GET :

1. Cliquez sur la requête
2. Vérifiez que la méthode est **GET**
3. Vérifiez l'URL (modifiez l'ID si nécessaire)
4. Cliquez sur **Send** 🚀
5. Vérifiez la réponse

### Pour faire un test DELETE :

1. Cliquez sur la requête
2. Vérifiez que la méthode est **DELETE**
3. **Remplacez l'ID dans l'URL** par un ID valide
4. Cliquez sur **Send** 🚀
5. Vérifiez que la réponse confirme la suppression

---

## ✅ Champs requis pour POST

- ✓ `nom` (String)
- ✓ `telephone` (String - 8 à 15 chiffres)
- ✓ `date` (String - Format: YYYY-MM-DD)
- ✓ `heure` (String - Format: HH:MM)
- ✓ `adresseDepart` (String)
- ✓ `adresseArrivee` (String)
- ✓ `nombreBagages` (String)
- ✓ `nombrePassagers` (String)

## 📌 Champs optionnels

- `email` (String)
- `commentaires` (String)
- `indicatifPays` (String - Défaut: "+33")

---

## 🐛 En cas de problème

### Erreur "Port 3000 is already in use"

```bash
lsof -ti:3000 | xargs kill -9
yarn start
```

### Erreur "Cannot POST /..."

- Vérifiez que vous utilisez la bonne méthode (POST, GET, DELETE)
- Vérifiez l'URL

### Erreur "Réservation non trouvée"

- Vérifiez que l'ID existe en faisant un GET sur `/users/reservations`
- Copiez un ID valide depuis la réponse

### Erreur de validation

- Vérifiez que tous les champs requis sont présents
- Vérifiez le format du téléphone (8-15 chiffres)
- Vérifiez le format de l'indicatif (+XX)

---

## 💡 Astuces

1. **Copier un ID facilement** : Dans la réponse POST, double-cliquez sur l'`_id` pour le sélectionner
2. **Modifier une requête** : Cliquez dessus et modifiez le body ou l'URL
3. **Dupliquer une requête** : Clic droit → Duplicate
4. **Voir l'historique** : Allez dans l'onglet "Activity"

---

## 🎨 Code de réponse HTTP

- **200** : OK - Succès (GET, DELETE)
- **201** : Created - Réservation créée (POST)
- **400** : Bad Request - Données invalides
- **404** : Not Found - Réservation non trouvée
- **500** : Server Error - Erreur serveur

---

**Bon test ! 🚀**
