interface Geometry {
    x: number;
    y: number;

	/**
	 * Retourne la position x 
	 **/
    X(): number;


	/**
	 * Retourne la position y
	 */
    Y(): number;

    /**
     * Détermine la valeur de X
     */
    setX(x: number): void;


     /**
     * Détermine la valeur de y
     */
    setY(y: number): void;
}
