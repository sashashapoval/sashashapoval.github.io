
def format_regression_output(results):
    """
    Print a statsmodels OLS regression in Stata-style:
    - Model equation with coefficients
    - Coefficients with standard errors underneath
    - t-statistics and p-values
    - Number of observations, SSR, and R-squared
    """

    params = results.params
    ses = results.bse
    t_stats = results.tvalues
    p_values = results.pvalues
    dep_var = results.model.endog_names

    # ----- Build regression equation -----
    eq = f"{dep_var} = "

    # Intercept first (if present)
    if "Intercept" in params.index:
        eq += f"{params['Intercept']:.4f}"
    else:
        eq += "0"

    # Add other variables
    for var in params.index:
        if var == "Intercept":
            continue
        sign = "+" if params[var] >= 0 else "-"
        eq += f" {sign} {abs(params[var]):.4f}*{var}"

    # ----- Print equation -----
    print("Model equation:\n")
    print("  " + eq + "\n")

    # ----- Print coefficients + SEs + t-statistics + p-values -----
    print("Coefficients (standard errors in parentheses, t-statistics and p-values in brackets):\n")
    for var in params.index:
        print(f"{var:12} {params[var]: .4f}")
        print(f"{'':12} ({ses[var]:.4f}) [t={t_stats[var]:.3f}, p={p_values[var]:.3f}]")
    print()

    # ----- Print model statistics -----
    n = int(results.nobs)
    ssr = float((results.resid ** 2).sum())
    r2 = float(results.rsquared)

    print(f"Number of observations (n): {n}")
    print(f"Sum of squared residuals (SSR): {ssr:.4f}")
    print(f"R-squared: {r2:.4f}\n")

